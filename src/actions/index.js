import * as fipeApi from '../utils/fipeApi'
export const GET_BRAND_LIST = 'GET_BRAND_LIST'
export const RESET_BRAND_LIST = 'RESET_BRAND_LIST'
export const GET_MODEL_LIST = 'GET_MODEL_LIST'
export const RESET_MODEL_LIST = 'RESET_MODEL_LIST'
export const GET_YEAR_LIST = 'GET_YEAR_LIST'
export const RESET_YEAR_LIST = 'RESET_YEAR_LIST'
export const GET_VEHICLE = 'GET_VEHICLE'
export const RESET_VEHICLE = 'RESET_VEHICLE'

export function getBrandList( typeId ) {
  return dispatch => fipeApi.getBrand( typeId )
    .then(res => res.json())
    .then(
      (brandList) => dispatch({ type: 'GET_BRAND_LIST', brandList })
    )
}

export function resetBrandList({brandList}){
  return {
    type: RESET_BRAND_LIST,
    brandList,
  }
}

export function getModelList( typeId, brandId ) {
  return dispatch => fipeApi.getModel( typeId, brandId )
    .then(res => res.json())
    .then(
      (modelList) => dispatch({ type: 'GET_MODEL_LIST', modelList })
    )
}

export function resetModelList({modelList}){
  return {
    type: RESET_MODEL_LIST,
    modelList,
  }
}

export function getYearList( typeId, brandId, modelId ) {
  return dispatch => fipeApi.getYear( typeId, brandId, modelId )
    .then(res => res.json())
    .then(
      (yearList) => dispatch({ type: 'GET_YEAR_LIST', yearList })
    )
}

export function resetYearList({yearList}){
  return {
    type: RESET_YEAR_LIST,
    yearList,
  }
}

export function getVehicle( typeId, brandId, modelId, yearId ) {
  return dispatch => fipeApi.getVehicle( typeId, brandId, modelId, yearId )
    .then(res => res.json())
    .then(
      (vehicle) => dispatch({ type: 'GET_VEHICLE', vehicle })
    )
}

export function resetVehicle({vehicle}){
  return {
    type: RESET_VEHICLE,
    vehicle,
  }
}