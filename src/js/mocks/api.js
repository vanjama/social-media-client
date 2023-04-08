export function fetchSuccess(response) {
  return Promise.resolve({
    ok: true,
    status: 200,
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
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
