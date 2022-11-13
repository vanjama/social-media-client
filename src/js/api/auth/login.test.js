<<<<<<< Updated upstream
import { login } from "./login";
import { isLoggedIn } from "../state.js";

const email = 'imsdale@stud.noroff.no';
const password = 'Imsdal2020!';

const data = { email: email, password: password };


function fetchSuccess(
  status = 201,
  statusText = 'Succeeded'
) {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
=======
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
>>>>>>> Stashed changes
    json: () => Promise.resolve(data),
  });
}

<<<<<<< Updated upstream

describe('Login', () => {
  it('Success', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await login(data);
    expect(item).toBe(data);
=======
function fetchFailed() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "no response",
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

  it("Fails to login user", async () => {
    global.fetch = jest.fn(() => fetchFailed());
    await expect(login(BAD_TEST_EMAIL, BAD_TEST_PSW)).rejects.toThrow(
      "Unauthorized"
    );
>>>>>>> Stashed changes
  });
});

test("data is added into local storage", () => {
    const mockId = "1";
    const mockJson = { data: "json data" };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
    });
