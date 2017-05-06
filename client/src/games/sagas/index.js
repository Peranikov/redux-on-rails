"use strict";

import * as types from '../actions/actionTypes'
import * as actions from '../actions/index'
import * as selectors from '../reducers/selectors'
import { call, put, fork, take, select } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

function getCsrfToken() {
  return document.querySelector("meta[name=csrf-token]").content;
}

function postGameApi(game) {
  const form = new FormData();
  form.append("game[title]", game.title);

  return fetch("http://localhost:3000/games.json", {
    method: 'POST',
    headers: { "X-CSRF-Token": getCsrfToken() },
    credentials: 'include',
    body: form
  })
}

function fetchGamesApi() {
  return fetch("http://localhost:3000/games.json")
    .then(response => response.json())
}

function* fetchGames() {
  yield put(actions.requestFetchGames());
  const fetchedGames = yield call(fetchGamesApi); // FIXME: Error Handling
  yield put(actions.successFetchGames(fetchedGames));
}

function* postGame() {
  while(true) {
    yield take(types.REQUEST_POST_GAME);
    const { postedGame } = yield select(selectors.requestPostGameSelector);
    yield call(postGameApi, postedGame); // FIXME: Error Handling
    yield put(actions.successPostGame());
    yield fork(fetchGames);
  }
}

export default function* root() {
  yield fork(fetchGames);
  yield fork(postGame);
}
