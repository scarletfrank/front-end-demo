import _ from 'lodash';
import $ from "jquery";
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue' // Vue 3.x 引入 vue 的形式
import App from './components/App.vue' // 引入 APP 页面组建
import {router} from './router.js'

// 导入 jQuery

$(function () {
  $("li:odd").css("backgroundColor", "yellow");
  $("li:even").css("backgroundColor", function () {
    return "#" + "D97634";
  });
});

const app = createApp(App);
app.use(router);
app.mount('#app');

