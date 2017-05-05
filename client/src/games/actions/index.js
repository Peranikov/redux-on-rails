"use strict";

import * as types from './actionTypes.js'

export const requestPostGame = (postedGame) => (
  {
    type: types.REQUEST_POST_GAME,
    payload: {
      postedGame
    }
  }
)

export const successPostGame = () => (
  {
    type: types.SUCCESS_POST_GAME
  }
)

export const failedPostGame = () => (
  {
    type: types.FAILED_POST_GAME
  }
)