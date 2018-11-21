import { observable, computed, action } from 'mobx';
import DataTypes from './DataTypes';

const State = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
  CANCELLED: 'cancelled'
};

class ObservablePromise {
  static schema = {
    state: DataTypes.enumeration(Object.values(State)),
    value: DataTypes.mixed,
    context: DataTypes.mixed
  };

  @observable state;
  @observable value;
  @observable context;

  @action setState(state, value) {
    this.state = state;
    this.value = value;
  }

  @action init(value, context = {}) {
    this.setState(State.PENDING, value);
    this.context = context;
  }

  @action resolve(value) {
    this.setState(State.FULFILLED, value);
  }

  @action reject(error) {
    this.setState(State.REJECTED, error);
  }

  @action cancel(reason) {
    this.setState(State.CANCELLED, reason);
  }

  @action reset() {
    this.state = undefined;
    this.value = undefined;
    this.context = undefined;
  }

  @computed get isPending() {
    return this.state === State.PENDING;
  }

  @computed get isFulfilled() {
    return this.state === State.FULFILLED;
  }

  @computed get isCancelled() {
    return this.state === State.CANCELLED;
  }

  @computed get isRejected() {
    return this.state === State.REJECTED;
  }
}

export { State };
export default ObservablePromise;
