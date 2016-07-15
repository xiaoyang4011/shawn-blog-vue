import api from '../api'

export const getCardList = ({ dispatch }, page) => {
  api.getList(page).then(response => {
    const json = response.data
    dispatch('GET_CARD_LIST', {cards: json.data})
  })
}
