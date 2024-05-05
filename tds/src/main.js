import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMoon, faSun);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');