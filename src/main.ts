import './assents/scss/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './locale'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import 'aos/dist/aos.css'
// import 'aos/dist/aos.css'
import * as ElementPlusIconsVue from "@element-plus/icons-vue"


const app=createApp(App)

app.use(ElementPlus)
app.use(i18n)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.mount('#app')
