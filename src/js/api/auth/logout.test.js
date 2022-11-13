import LocalStorageMock from "../../../mocks/localStorage";
import * as storage from "../../../storage/index";
import { logout } from "../logout";

global.localStorage = new LocalStorageMock();

const TOKEN_KEY = "TOKEN";
const TOKEN_VALUE = "Fhhhlh";

beforeAll(() => {
  storage.save(TOKEN_KEY, TOKEN_VALUE);
});

afterAll(() => {
  storage.remove(TOKEN_KEY);
});

describe("logout", () => {
  it("removes token", () => {
    expect(storage.load(TOKEN_KEY)).toEqual(TOKEN_VALUE);
    logout();
    expect(storage.load(TOKEN_KEY)).toEqual(null);
  });
});