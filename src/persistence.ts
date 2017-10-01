import _ from 'lodash';
import {Dictionary} from 'lodash';

const STATE_FIELDS = ['coffeeWeight', 'ratio',  'sweetness', 'intensity'];
const STORAGE_KEY = 'settings';

export interface State extends Dictionary<number> {
  coffeeWeight: number;
  ratio: number;
  sweetness: number;
  intensity: number;
}

/**
 * Loads the state from localstorage or the URL hash if there is any. The
 * function will return null if there's also no saved state available.
 */
export function loadConfig(): State | null {
  if (location.hash.length > 1) {
    const parameters = location.hash.substr(1).split('&').map(function (part: string) {
      const kv = part.split('=');
      return kv.length == 2 ? [kv[0], Number(kv[1])] : [];
    });
    const state: State = _.pick(_.fromPairs(parameters), STATE_FIELDS);

    if (_.size(state) == STATE_FIELDS.length) {
      return state;
    }
  }

  // Try to read from the localstorage if there are no or invalid parameters
  // stored in the URL hash
  let storage = localStorage.getItem(STORAGE_KEY);
  if (storage === null) {
    return null;
  }

  const state: State = _.pick(JSON.parse(storage), STATE_FIELDS);
  if (_.size(state) == STATE_FIELDS.length) {
    return state;
  } else {
    return null;
  }
}

/**
 * Saves the state to localstorage and encodes it in the URL hash.
 */
export function saveConfig(state: State) {
  // Don't do anything unless there are changes
  if (_.isEqual(state, loadConfig())) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  history.replaceState(undefined, '', '#' + _.map(state, (value, key) => `${key}=${value}`).join('&'));
}
