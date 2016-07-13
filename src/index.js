
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import configRouter from './routes'
import App from './components/App.vue'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-toast/dist/vue-toast.min.css'

Vue.use(VueRouter)
Vue.use(VueValidator)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})
configRouter(router)
sync(store, router)

router.start(Vue.extend(App), '#root')
window.router = router
