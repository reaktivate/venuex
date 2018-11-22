import { matchPath, generatePath } from 'react-router';
import escapeRegExp from 'lodash/escapeRegExp';
import config from '@venuex/web/config';
import warning from 'tiny-warning';

function createRouteMatchRegExp(pattern) {
  return new RegExp(`^${escapeRegExp(pattern).replace(/\\\.\\\*/g, '(\\.)?.*')}$`, 'u');
}

function isRouteMatch(route, pattern) {
  return route && createRouteMatchRegExp(pattern).test(route);
}

class Router {
  constructor(routes) {
    this.routes = new Map(Object.entries(routes));
  }

  path(name, params = {}) {
    if (!this.routes.has(name)) {
      warning(false, `Named route "${name}" doesn't exists.`);
    }

    return generatePath(this.routes.get(name), params);
  }

  match(pathname, pattern) {
    for (let [name, path] of this.routes) {
      const match = matchPath(pathname, {
        path,
        exact: true,
        strict: false,
        sensitive: false
      });

      if (match && isRouteMatch(name, pattern)) {
        match.name = name;

        return match;
      }
    }
  }
}

export default new Router(config.router.routes);
