import LocalStorageMock from "../mocks/localStorage";
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
