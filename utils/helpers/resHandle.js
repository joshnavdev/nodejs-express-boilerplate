/* eslint-disable no-console */

function handleError(error) {
  console.error(error);

  return { error: error.message };
}

export { handleError };
