"use strict";

import * as types from '../actions/actionTypes'
import * as actions from '../actions/index'
import { call, put, fork, take, select } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

function getCsrfToken() {
  return document.getElementsByName("csrf-token")[0].content;
}

function postGameApi(game) {
  const form = new FormData();
  form.append("game[title]", game.title);

  return fetch("http://localhost:3000/games.json", {
    method: 'POST',
    headers: new Headers({ "X-CSRF-Token": getCsrfToken() }),
    credentials: 'include',
    body: form
  })
}

function fetchGamesApi() {
  return fetch("http://localhost:3000/games.json")
    .then(response => response.json())
}

function* postGame() {
  while(true) {
    yield take(types.REQUEST_POST_GAME);
    const { postedGame } = yield select(state => state.requestPostGame);
    const res = yield call(postGameApi, postedGame);
    console.log(res);
    yield put(actions.successPostGame());
  }
}

export default function* root() {
  yield fork(postGame);
}
