export default function makeHotReloadable(module, domainManager) {
  const snapshot = Symbol('snapshot');

  // Save and restore the state of the store while this module is hot reloaded
  if (module.hot) {
    if (module.hot.data && module.hot.data[snapshot]) {
      domainManager.load(module.hot.data[snapshot]);
    }

    module.hot.dispose((data) => {
      data[snapshot] = domainManager.dump();
    });
  }
}
