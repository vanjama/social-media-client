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
    json: () => Promise.resolve(data),
  });
}


describe('Login', () => {
  it('Success', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await login(data);
    expect(item).toBe(data);
  });
});

test("data is added into local storage", () => {
    const mockId = "1";
    const mockJson = { data: "json data" };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
    });


describe("isLoggedIn", () => {
  it("returns false when the token cannot be found", () => {
    expect(isLoggedIn()).not.toBeTruthy();
  });
});
