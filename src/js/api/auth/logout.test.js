import { logout } from './logout.js';
import { save } from '../../storage/save.js';
import { load } from '../../storage/load.js';
import { LocalStorageMock } from '../../storage/localStorage.js';

global.localStorage = new LocalStorageMock();

describe('logout', () => {
  it('Clears the token from browser storage', () => {
    const key = 'token';
    const value = 'my string';
    save(key, value);
    expect(load(key)).toEqual(value);
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value));
    logout();
    expect(localStorage.getItem(key)).toEqual(null);
  });
});
