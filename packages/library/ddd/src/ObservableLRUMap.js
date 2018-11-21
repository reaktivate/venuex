import { observable, decorate } from 'mobx';
import { LRUMap } from 'lru_map';

class ObservableLRUMap {
  constructor(limit, entries) {
    const map = new LRUMap(limit, entries);

    decorate(map, {
      _keymap: observable
    });

    return map;
  }
}

export default ObservableLRUMap;
