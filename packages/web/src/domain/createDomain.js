import { DomainManager } from '@venuex/ddd';
import firebase from '../services/firebase';
import config from '../config';

function createDomain(dependencies = {}) {
  return new DomainManager({ firebase, config, ...dependencies });
}

export default createDomain;
