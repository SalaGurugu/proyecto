import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)

loadFonts()

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')