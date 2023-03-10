/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import { auth } from '@/firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


let app;
auth.onAuthStateChanged(() => {
    
})

createApp(App).use(store).use(router).use(bootstrap).mount('#app')
