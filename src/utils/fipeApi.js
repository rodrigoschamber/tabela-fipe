const api = "https://parallelum.com.br/fipe/api/v1"
const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
}

export const getBrand = (typeId) =>
  fetch(`${proxyUrl + api}/${typeId}/marcas`, {
    method:'GET',
    headers,
  })

export const getModel = (typeId, brandId) =>
  fetch(`${proxyUrl + api}/${typeId}/marcas/${brandId}/modelos`, {
    method:'GET',
    headers,
  })

export const getYear = (typeId, brandId, modelId) =>   
  fetch(`${proxyUrl + api}/${typeId}/marcas/${brandId}/modelos/${modelId}/anos`, {
    method:'GET',
    headers,
  })
  
export const getVehicle = (typeId, brandId, modelId, yearId) =>
  fetch(`${proxyUrl + api}/${typeId}/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`, {
    method:'GET',
    headers,
  })