import _ from 'lodash';
import $ from "jquery";

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

// 导入 jQuery

$(function () {
  $("li:odd").css("backgroundColor", "lightblue");
  $("li:even").css("backgroundColor", function () {
    return "#" + "D97634";
  });
});
