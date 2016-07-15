import { GET_CARD_LIST } from '../types'

const state = {
  cards:[]
}

const mutations = {
  [GET_CARD_LIST](state, action){
    state.cards = state.cards.concat(action.cards)
  }
}

export default {
  state,
  mutations
}
