import React from 'react';
import { createDomain } from '@venuex/web/domain';
import { makeHotReloadable } from '@venuex/ddd/hrm';
import { Provider as DomainProvider } from 'mobx-react';

const domain = createDomain();

makeHotReloadable(module, domain);

const provideDomain = (WrappedComponent) => {
  const WithDomain = (props) => (
    <DomainProvider domain={domain}>
      <WrappedComponent {...props} />
    </DomainProvider>
  );

  return WithDomain;
};

export default provideDomain;
