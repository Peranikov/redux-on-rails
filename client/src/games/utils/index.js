"use strict";

export function getCsrfToken() {
  return document.querySelector("meta[name=csrf-token]").content;
}