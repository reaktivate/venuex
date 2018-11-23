import { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import GenericPropTypes from '@venuex/web/ui/types/Generic';
import merge from 'lodash/merge';

class Form extends PureComponent {
  static propTypes = {
    component: GenericPropTypes.renderer.isRequired,
    entityId: PropTypes.string,
    entity: PropTypes.object,
    initialValues: PropTypes.object,
    fetchEntity: PropTypes.func.isRequired,
    saveEntity: PropTypes.func.isRequired,
    validate: PropTypes.func,
    entityToFormMapper: PropTypes.func.isRequired,
    formToEntityMapper: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { entityId, entity, fetchEntity } = this.props;

    if (!entity && entityId) {
      fetchEntity(entityId);
    }
  }

  getInitialValues() {
    const { initialValues, entity, entityToFormMapper } = this.props;

    if (entity) {
      return merge({}, initialValues, entityToFormMapper(entity));
    }

    return initialValues;
  }

  handleSubmit = async (values, { setSubmitting, setErrors }) => {
    const { entity, saveEntity, formToEntityMapper } = this.props;

    try {
      await saveEntity(formToEntityMapper(values, entity));
    } catch (ex) {
      // TODO: Call onSaveError to customize errors object
      setErrors({
        form: 'Something went wrong, please try again.'
      });
    }

    setSubmitting(false);
  };

  render() {
    const { component, entity, validate } = this.props;

    const props = {
      initialValues: this.getInitialValues(),
      isInitialValid: !!entity,
      onSubmit: this.handleSubmit,
      validate
    };

    if (typeof component === 'function') {
      return component(props);
    }

    return createElement(component, props);
  }
}

export default Form;
