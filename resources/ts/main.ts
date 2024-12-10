import { createApp } from 'vue'

import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'

// Echo
// import './echo'

// Styles
import '@core-scss/template/index.scss'
import '@styles/styles.scss'
import "vue-toastification/dist/index.css"

// Create vue app
const app = createApp(App)

// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
