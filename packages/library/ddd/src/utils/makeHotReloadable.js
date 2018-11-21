const SNAPSHOT = Symbol('snapshot');

export default function makeHotReloadable(module, domainManager) {
  // Save and restore the state of the store while this module is hot reloaded
  if (module.hot) {
    if (module.hot.data && module.hot.data[SNAPSHOT]) {
      domainManager.load(module.hot.data[SNAPSHOT]);
    }

    module.hot.dispose((data) => {
      data[SNAPSHOT] = domainManager.dump();
    });
  }
}
