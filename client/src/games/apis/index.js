"use strict";

import * as util from '../utils/index'
import fetch from 'isomorphic-fetch'

export function postGame(game) {
  const form = new FormData();
  form.append("game[title]", game.title);

  return fetch("http://localhost:3000/games.json", {
    method: 'POST',
    headers: { "X-CSRF-Token": util.getCsrfToken() },
    credentials: 'include',
    body: form
  })
}

export function fetchGames() {
  return fetch("http://localhost:3000/games.json")
    .then(response => response.json())
}