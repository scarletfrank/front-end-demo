import _ from 'lodash';
import $ from "jquery";
import printMe from './print.js';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

// document.body.appendChild(component());

// 导入 jQuery

$(function () {
  $("li:odd").css("backgroundColor", "yellow");
  $("li:even").css("backgroundColor", function () {
    return "#" + "D97634";
  });
});
