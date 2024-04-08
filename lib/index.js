"use strict";

var _utils = require("./utils");
console.log("check");
window.onload = () => {
  attachFormEventHandler();
};
function attachFormEventHandler() {
  var form = document.querySelector("#form");
  form.addEventListener("submit", submitForm);
}
function submitForm(e) {
  e.preventDefault();
  var form = new FormData(e.target);
  var formData = form.entries();
  var users = {};
  for (var [_key, value] of formData) {
    users[_key] = value;
  }
  var a = 3;
  var b = 3;
  var result = (0, _utils.sum)(a, b);
  console.log("result", result);
}