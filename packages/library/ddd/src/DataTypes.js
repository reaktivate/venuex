import { isObservableMap, isObservableArray, toJS } from 'mobx';
import isPlainObject from 'lodash/isPlainObject';
import isArray from 'lodash/isArray';
import isMap from 'lodash/isMap';
import toString from 'lodash/toString';
import toNumber from 'lodash/toNumber';
import toInteger from 'lodash/toInteger';
import identity from 'lodash/identity';
import invariant from 'tiny-invariant';
import warning from 'tiny-warning';
import moment from 'moment';
import createDefaultEntityResolver from './utils/defaultEntityResolver';

function toBoolean(value) {
  if (typeof value === 'boolean' || typeof value === 'number') {
    return !!value;
  }

  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }
}

export class Type {
  _field;
  _required = false;
  _transformer = identity;
  _serializer = identity;

  from(name) {
    this._field = name;

    return this;
  }

  transformer(func) {
    this._transformer = func;

    return this;
  }

  serializer(func) {
    this._serializer = func;

    return this;
  }

  get required() {
    this._required = true;

    return this;
  }

  get field() {
    return this._field;
  }

  get isRequired() {
    return this._required;
  }

  transform(value, ...args) {
    return this._transformer(value, ...args);
  }

  serialize(value, ...args) {
    return this._serializer(value, ...args);
  }
}

export class StringType extends Type {
  _transformer = toString;
}

export class NumberType extends Type {
  _transformer = toNumber;
}

export class IntegerType extends Type {
  _transformer = toInteger;
}

export class BooleanType extends Type {
  _transformer = toBoolean;
}

export class DateType extends Type {
  _format;

  _transformer = (value) => {
    const date = moment(value, this._format, true);

    if (!date.isValid()) {
      warning(false, `[DateType] Invalid date value: "${value}".`);

      return;
    }

    return date;
  };

  _serializer = (value) => {
    if (moment.isMoment(value)) {
      return moment(value).format(this._format);
    }
  };

  format(format) {
    this._format = format;

    return this;
  }
}

export class TimestampType extends Type {
  _transformer = (value) => {
    if (value.toDate && (value.nanoseconds || value.seconds)) {
      value = value.toDate();
    }

    const date = moment(value, this._format, true);

    if (!date.isValid()) {
      warning(false, `[DateType] Invalid date value: "${value}".`);

      return;
    }

    return date;
  };

  _serializer = (value) => {
    if (moment.isMoment(value)) {
      return moment(value).unix();
    }
  };
}

export class ObjectType extends Type {
  _shape;

  _transformer = (value, { domainManager }) => {
    if (!isPlainObject(value)) {
      warning(false, `[ObjectType] Value is not an object: "${value}".`);

      return;
    }

    if (this._shape) {
      const { modelFactory } = domainManager;

      return modelFactory.hydrate({}, value, { schema: this._shape });
    }

    return value;
  };

  _serializer = (value, { domainManager }) => {
    const { modelFactory } = domainManager;

    if (this._shape) {
      return modelFactory.serialize(value, { schema: this._shape });
    }

    return toJS(value);
  };

  shape(schema) {
    this._shape = schema;

    return this;
  }
}

export class MixedType extends Type {}

export class EnumerationType extends Type {
  _options = [];

  _transformer = (value) => {
    if (!this._options.includes(value)) {
      warning(
        false,
        '[EnumerationType] Invalid enumeration option. ' +
          `Allowed one of ["${this._options.join('", "')}"] but got "${value}".`
      );

      return;
    }

    return value;
  };

  constructor(options) {
    super();

    this._options = options;
  }
}

export class ArrayType extends Type {
  _type;

  _transformer = (value, ...args) => {
    if (!isArray(value)) {
      warning(false, `[ArrayType] Value is not an array: "${value}".`);

      return;
    }

    return value.map((item) => this._type.transform(item, ...args));
  };

  _serializer = (value, ...args) => {
    if (!isArray(value) && !isObservableArray(value)) {
      return;
    }

    return value.map((item) => this._type.serialize(item, ...args));
  };

  constructor(Type) {
    super();

    this._type = Type;
  }
}

export class MapType extends Type {
  _type;

  _transformer = (value, ...args) => {
    if (!isPlainObject(value)) {
      warning(false, `[MapType] Value is not an map: "${value}".`);

      return;
    }

    const map = new Map();

    for (const [key, value] of Object.entries(value)) {
      map.set(key, this._type.transform(value, ...args));
    }

    return map;
  };

  _serializer = (value, ...args) => {
    if (!isMap(value) && !isObservableMap(value)) {
      return;
    }

    const result = {};

    for (const [key, value] of value) {
      result[key] = this._type.serialize(value, ...args);
    }

    return result;
  };

  constructor(Type) {
    super();

    this._type = Type;
  }
}

export class ReferenceType extends Type {
  _entity;
  _store;
  _resolver;

  _transformer = (value, { domainManager }) => {
    if (typeof this._resolver === 'function') {
      return this._resolver(value, { domainManager });
    }

    if (typeof this._entity.resolver === 'function') {
      return this._entity.resolver(value, { domainManager });
    }

    invariant(
      this._store,
      '[ReferenceType] "store" or "resolver" should be provided to resolve the entity.'
    );

    const resolver = createDefaultEntityResolver(domainManager, this._store, this._entity);

    return resolver(value);
  };

  _serializer = (value, { domainManager }) => {
    const { modelFactory } = domainManager;

    return modelFactory.serialize(value);
  };

  constructor(Class) {
    super();

    this._entity = Class;
  }

  store(Store) {
    this._store = Store;

    return this;
  }

  resolver(func) {
    this._resolver = func;

    return this;
  }
}

export class EmbedType extends Type {
  _entity;
  _resolver;

  _transformer = (value, { domainManager }) => {
    const { modelFactory } = domainManager;

    return modelFactory.make(this._entity, value);
  };

  _serializer = (value, { domainManager }) => {
    const { modelFactory } = domainManager;

    return modelFactory.serialize(value);
  };

  constructor(Class) {
    super();

    this._entity = Class;
  }

  resolver(func) {
    this._resolver = func;

    return this;
  }
}

const DataTypes = {
  get string() {
    return new StringType();
  },

  get number() {
    return new NumberType();
  },

  get integer() {
    return new IntegerType();
  },

  get int() {
    return new IntegerType();
  },

  get boolean() {
    return new BooleanType();
  },

  get bool() {
    return new BooleanType();
  },

  get date() {
    return new DateType();
  },

  get timestamp() {
    return new TimestampType();
  },

  get object() {
    return new ObjectType();
  },

  get mixed() {
    return new MixedType();
  },

  enumeration(options) {
    return new EnumerationType(options);
  },

  arrayOf(Type) {
    return new ArrayType(Type);
  },

  mapOf(Type) {
    return new MapType(Type);
  },

  reference(Class) {
    return new ReferenceType(Class);
  },

  embed(Class) {
    return new EmbedType(Class);
  }
};

export default DataTypes;
