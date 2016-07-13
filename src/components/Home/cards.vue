<template>
  <div class="example-wrapper" id="example1">
    <loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <ul class="example-list">
        <li v-for="item in cardList">
          <img :src="item.img" />
        </li>
      </ul>
    </loadmore>
  </div>
</template>
<script>
require('mint-loadmore/lib/style.css')
import { getCardList } from '../../vuex/actions'
import Loadmore from 'mint-loadmore'

export default {
  components: {
    Loadmore
  },
  data() {
    return {
      limit : 20
    }
  },
  vuex:{
    getters:{
      cardList: ({ cardList }) => cardList.cards
    },
    actions:{
      getCardList
    }
  },
  created(){
    this.getCardList()
  },
  methods: {
    loadTop(id) {
      this.$broadcast('onTopLoaded', id)
    },
    loadBottom(id) {
      setTimeout(() => {
        this.limit = this.limit + 20
        this.getCardList(this.limit)

        if(this.limit < 880) {
          this.allLoaded = true
        }

        this.$broadcast('onBottomLoaded', id)
      }, 5000)
    }
  }
}
</script>
