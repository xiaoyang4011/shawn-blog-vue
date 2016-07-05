export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: require('./components/Home/index.vue')
    },
    '*': {
      component: require('./components/NotFound.vue')
    }
  })
}
