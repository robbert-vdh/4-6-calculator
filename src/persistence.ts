import _ from 'lodash';
import {Dictionary} from 'lodash';

const STORAGE_KEY = 'settings';

export interface State extends Dictionary<number> {
  sweetness: number;
  coffeeWeight: number;
  ratio: number;
  intensity: number;
}

/**
 * Loads the state from localstorage or the URL hash if there is any.
 */
// export function loadConfig(): State {}

/**
 * Saves the state to localstorage and encodes it in the URL hash.
 */
export function saveConfig(state: State) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.location.hash = '#' + _.map(state, (key, value) => `${key}=${value}`);
}
