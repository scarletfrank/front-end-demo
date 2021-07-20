import _ from 'lodash';
import $ from "jquery";
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


// 导入 jQuery

$(function () {
  $("li:odd").css("backgroundColor", "yellow");
  $("li:even").css("backgroundColor", function () {
    return "#" + "D97634";
  });
});

class Person {
  static info = {name: 'scarlet', age: 22};
}

console.log(Person.info);
