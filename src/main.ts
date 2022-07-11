import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//TODO https://github.com/vuejs/vue/issues/5298

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
