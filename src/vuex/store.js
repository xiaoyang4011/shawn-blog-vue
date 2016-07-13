import Vue from 'vue'
import Vuex from 'vuex'
import cardList from './modules/card.list'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    cardList
  },
  strict: debug
})
