import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Login from "./components/Login";
import Index from "./components/Index";
import Browse from "./components/Browse";
import Dropdown from "./components/Dropdown";
//import storeTest from "./components/storeTest";
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/index', component: Index },
    { path: '/browse', component: Browse },
    { path: '/dropdown', component: Dropdown }
  ]
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')