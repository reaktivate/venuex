import DataTypes from './DataTypes';

class Entity {
  static schema = {
    id: DataTypes.mixed.required
  };

  static resolver = (id, { domainManager }) => {
    throw new Error('Should be implemented in inherited class.');
  };
}

export default Entity;
