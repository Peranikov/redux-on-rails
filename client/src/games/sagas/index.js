"use strict";

import * as types from '../actions/actionTypes'
import * as actions from '../actions/index'
import * as selectors from '../reducers/selectors'
import * as api from '../apis/index'
import { call, put, fork, take, select } from 'redux-saga/effects'

function* fetchGames() {
  yield put(actions.requestFetchGames());
  const fetchedGames = yield call(api.fetchGames); // FIXME: Error Handling
  yield put(actions.successFetchGames(fetchedGames));
}

function* postGame() {
  while(true) {
    yield take(types.REQUEST_POST_GAME);
    const { postedGame } = yield select(selectors.requestPostGameSelector);
    yield call(api.postGame, postedGame); // FIXME: Error Handling
    yield put(actions.successPostGame());
    yield fork(fetchGames);
  }
}

export default function* root() {
  yield fork(fetchGames);
  yield fork(postGame);
}
