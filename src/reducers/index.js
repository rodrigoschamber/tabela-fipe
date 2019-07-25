import { combineReducers } from 'redux'
import {
  GET_BRAND_LIST,
  RESET_BRAND_LIST,
  GET_MODEL_LIST,
  RESET_MODEL_LIST,
  GET_YEAR_LIST,
  RESET_YEAR_LIST,
  GET_VEHICLE,
  RESET_VEHICLE,
} from '../actions'

function brands (state = {}, action) {
  switch (action.type) {
    case GET_BRAND_LIST :
      return action.brandList
    case RESET_BRAND_LIST :
      return 0
    default :
      return state
  }
}

function models (state = {}, action) {
  switch (action.type) {
    case GET_MODEL_LIST :
      return action.modelList.modelos
    case RESET_MODEL_LIST :
      return 0
    default :
      return state
  }
}

function years (state = {}, action) {
  switch (action.type) {
    case GET_YEAR_LIST :
      return action.yearList
    case RESET_YEAR_LIST :
        return 0
    default :
      return state
  }
}

function vehicle (state = {}, action) {
  switch (action.type) {
    case GET_VEHICLE :
      return action.vehicle
    case RESET_VEHICLE :
      return 0
    default :
      return state
  }
}

export default combineReducers({
  brands, models, years, vehicle
})