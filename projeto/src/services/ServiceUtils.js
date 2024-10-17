const handleError = (err) => {
  console.warn(err);
  return new Response(JSON.stringify({
      code: 400,
      message: 'Erro recuperando dados',
      type: err.name,
      original: err.message
  }));
};

const handleResponse = async (response) => {
  if (response.ok) {
    return await response.json();
  } else {
    return Promise.reject(response);
  }
}

export {handleError, handleResponse};