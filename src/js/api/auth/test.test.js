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