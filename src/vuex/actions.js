import api from '../api'

export const getCardList = ({ dispatch }, limit) => {
  api.getList(limit).then(response => {
    const json = response.data
    dispatch('GET_CARD_LIST', {cards: json.data})
  })
}
