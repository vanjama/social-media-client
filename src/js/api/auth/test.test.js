<<<<<<< Updated upstream
export default class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = String(value);
    }
  
    removeItem(key) {
      delete this.store[key];
    }
  }
  export function fetchSuccess(response) {
    return Promise.resolve({
      ok: true,
      status: 201,
      statusText: "OK",
      json: () => Promise.resolve(response),
    });
  }
  
  export function fetchFailure(statusCode = 404, status = "Not Found") {
    return Promise.resolve({
      ok: false,
      statusCode,
      status,
    });
  }
=======
import LocalStorageMock from "../../mocks/localStorage";
import * as storage from "../index";

global.localStorage = new LocalStorageMock();

describe("storage", () => {
  it("Saves a profile object to storage", () => {
    const key = "profile";
    const value = {
      name: "name",
      email: "email",
    };
    const serializedValue = JSON.stringify(value);
    storage.save(key, value);
    expect(localStorage.getItem(key)).toEqual(serializedValue);
  });
});
>>>>>>> Stashed changes
