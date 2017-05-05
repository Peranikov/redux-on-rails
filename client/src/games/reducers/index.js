"use strict";

import { combineReducers } from 'redux'
import * as types from '../actions/actionTypes.js'

const requestPostGame = (state = { isPosting: false, postedGame: {} }, action) => {
  switch (action.type) {
    case types.REQUEST_POST_GAME :
      const postedGame = action.payload.postedGame;
      return Object.assign(state, { isPosting: true, postedGame })
    case types.SUCCESS_POST_GAME :
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  requestPostGame
});

export default rootReducer