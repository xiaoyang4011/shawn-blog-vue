import Vue from 'vue'
import VueResource from 'vue-resource'
import { API_ROOT } from '../config'
import { getCookie,signOut } from '../utils/authService'

Vue.use(VueResource)
Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}

export const UserResource = Vue.resource(API_ROOT + 'users{/id}')
