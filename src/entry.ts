import './scss/app.scss';

import Vue from "vue";
import App from "./components/App.vue";

new App({el: "#app"});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('dist/sw.js');
}
