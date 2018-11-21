import { DomainManager } from '@venuex/ddd';
import firebase from '@venuex/web/services/firebase';
import config from '@venuex/web/config';

function createDomain(dependencies = {}) {
  return new DomainManager({ firebase, config, ...dependencies });
}

export default createDomain;
