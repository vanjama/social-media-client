import { login } from "../src/js/api/auth/login";
import { LocalStorageMock } from "../src/js/storage/localStorageMock";

global.localStorage = new LocalStorageMock();

const TEST_EMAIL = "imsdal@stud.noroff.no";
const TEST_PSW = "Imsdale1234!";
const TEST_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

const data = { email: TEST_EMAIL, password: TEST_PSW, token: TEST_TOKEN };

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "fetch OK",
    json: () => Promise.resolve(data),
  });
}

describe("login", () => {
  it("Success", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const user = await login(TEST_EMAIL, TEST_PSW);
    global.localStorage.setItem("token", TEST_TOKEN);
    expect(user).toEqual(data);
    expect(user.token).toEqual(global.localStorage.getItem("token"));
  });
});
