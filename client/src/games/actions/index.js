"use strict";

import * as types from './actionTypes.js'

export const requestPostGame = (postedGame) => (
  {
    type: types.REQUEST_POST_GAME,
    payload: {
      postedGame
    }
  }
);

export const successPostGame = () => (
  {
    type: types.SUCCESS_POST_GAME
  }
);

export const failedPostGame = () => (
  {
    type: types.FAILED_POST_GAME
  }
);

export const requestFetchGames = () => (
  {
    type: types.REQUEST_FETCH_GAMES
  }
);

export const successFetchGames = (fetchedGames) => (
  {
    type: types.SUCCESS_FETCH_GAMES,
    payload: {
      fetchedGames
    }
  }
);

export const failedFetchGames = () => (
  {
    type: types.FAILED_FETCH_GAMES
  }
);