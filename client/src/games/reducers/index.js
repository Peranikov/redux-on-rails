"use strict";

import { combineReducers } from 'redux'
import * as types from '../actions/actionTypes.js'

const requestPostGame = (state = { isPosting: false, postedGame: {} }, action) => {
  switch (action.type) {
    case types.REQUEST_POST_GAME :
      const postedGame = action.payload.postedGame;
      // FIXME: refactor spread style
      return Object.assign(state, { isPosting: true, postedGame });
    case types.SUCCESS_POST_GAME :
      // FIXME: refactor spread style
      return Object.assign(state, { isPosting: false });
    default:
      return state;
  }
}

const fetchGames = (state = { games: [] }, action) => {
  switch (action.type) {
    case types.SUCCESS_FETCH_GAMES :
      const games = action.payload.fetchedGames;
      return {
        ...state,
        games
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  requestPostGame,
  fetchGames
});

export default rootReducer