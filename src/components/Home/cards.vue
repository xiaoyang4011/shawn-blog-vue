<template>
  <div class="example-wrapper" id="example1">
    <loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <ul class="index-ul">
        <li v-for="item in cardList" class="index-li">
          <img :src="item.img" />
          <div class="card_info">
              <p>{{ item.name }}</p>
          </div>
        </li>
      </ul>
    </loadmore>
  </div>
</template>
<script>
require('mint-loadmore/lib/style.css')
require('./../../assets/css/index.scss')
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
      }, 100)
    }
  }
}
</script>
