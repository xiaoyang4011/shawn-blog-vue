export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: require('./components/Home/index.vue')
    },
    '/cards': {
      name: 'cards',
      component: require('./components/Home/cards.vue')
    },
    '*': {
      component: require('./components/NotFound.vue')
    }
  })
}
