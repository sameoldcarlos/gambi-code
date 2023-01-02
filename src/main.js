import { createApp } from 'vue'
import App from './App.vue'
import VueFeather from 'vue-feather';

import './assets/main.css'

const app = createApp(App)

app.component(VueFeather.name, VueFeather);

app.mount('#app')
