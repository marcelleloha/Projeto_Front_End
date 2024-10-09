import { handleError, handleResponse } from "./ServiceUtils";

const url = "https://botafogo-atletas.mange.li/2024-1"

const getAll = async () => {
  const response = await (fetch(`${url}/all`).catch(handleError));

  return await handleResponse(response);  
}

const getElenco = async (elenco = 'masculino') => {
  const response = await (fetch(`${url}/${elenco}`).catch(handleError));

  return await handleResponse(response);
}

const getAtleta = async (atleta) => {
  const response = await (fetch(`${url}/${atleta}`).catch(handleError));
  
  return await handleResponse(response);
}


export { getAll, getElenco, getAtleta };