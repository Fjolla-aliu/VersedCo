/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import firebase from "firebase/auth";
import "firebase/auth";

let app;
firebase.auth().onAuthStateChanged(() => {
    
})

createApp(App).use(store).use(router).use(bootstrap).mount('#app')
