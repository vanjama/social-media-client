import { login } from './login';
import { LocalStorageMock } from '/mocks/localStorage.js ';

global.localStorage = new LocalStorageMock();

const validEmail = 'myemail@stud.noroff.no';
const invalidEmail = 'email@email.com';
const password = 'Password123';

const profile = {
  name: 'Full Name',
  email: validEmail,
};
function fetchSuccess(status = 201, statusText = 'Successful') {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve(profile),
  });
}
function fetchFailure(status = 404, statusText = 'Unsuccessful') {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe('login', () => {
  it('Returns a valid token when provided with valid credentials', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const data = await login(validEmail, password);
    expect(data).toEqual(profile);
  });
  it('Returns an error when provided with invalid credentials', async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(invalidEmail, password)).rejects.toThrow('Unsuccessful');
  });
});

