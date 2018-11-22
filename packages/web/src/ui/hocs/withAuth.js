import React, { Component } from 'react';
import { connect } from '@venuex/ddd/react';
import AuthService from '@venuex/domain/services/AuthService';
import AuthStore from '@venuex/domain/stores/AuthStore';

const withAuth = (WrappedComponent) => {
  @connect(({ domain }) => {
    const authStore = domain.get(AuthStore);
    const authService = domain.get(AuthService);

    return {
      isAuthenticated: authStore.isAuthenticated,
      currentUser: authStore.currentUser,
      syncAuthenticatedUser: authService.syncAuthenticatedUser,
      subscribeToAuthStateChanges: authService.subscribeToAuthStateChanges
    };
  })
  class WithAuth extends Component {
    componentDidMount() {
      this.props.syncAuthenticatedUser();
      this.unsubscribe = this.props.subscribeToAuthStateChanges();
    }

    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }

    render() {
      // TODO: If not authenticated redirect to login screen

      return <WrappedComponent {...this.props} />;
    }
  }

  return WithAuth;
};

export default withAuth;
