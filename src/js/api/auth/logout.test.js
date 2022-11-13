import LocalStorageMock from "../../../mocks/localStorage";
import * as storage from "../../../storage/index";
import { logout } from "../logout";

global.localStorage = new LocalStorageMock();

<<<<<<< Updated upstream
const TOKEN_KEY = "TOKEN";
const TOKEN_VALUE = "Fhhhlh";
=======
const TOKEN_KEY = "token";
const TOKEN_VALUE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
>>>>>>> Stashed changes

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