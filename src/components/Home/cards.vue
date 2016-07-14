<template>
  <mt-header class="mint-header" fixed title="全部卡组">
  <mt-button class="mint-button" v-link="'/'" slot="left" icon="back"></mt-button>
  <mt-button slot="right"   @click="menu = true" icon="more">
  </mt-button>
  </mt-header>
  <div class="center">
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <ul class="index-ul">
        <li v-for="item in cardList" class="index-li">
              <img v-lazy="item.img"/>
              <div class="card_info">
                  <p>{{ item.name }}</p>
              </div>
        </li>
      </ul>
    </mt-loadmore>
  </div>
  <mt-popup :visible.sync="menu" position="right" class="mint-popup-3">

  </mt-popup>
</template>
<script>
require('./../../assets/css/index.scss')
import { getCardList } from '../../vuex/actions'

export default {
  data() {
    return {
      menu : false,
      limit : 0
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
<style>
.mint-header {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
}
.mint-header .mint-button {
  color : silver;
}
.mint-header-title {
  color: gray;
  margin-top : 10px;
  margin-bottom: 10px;
}
.mint-popup-3 {
  width: 50%;
  height: 100%;
  background-color: #fff;
}
.index-li {
  list-style-type: none;
  text-align: center;
  border-bottom: 1px solid #d5dbdb;
  margin-top: 50px;
  margin-bottom: 20px;
}

img[lazy=loading] {
  width: 40px;
  height: 40px;
  margin: auto;
  background-color: #ddd;
  border-radius: 20px;
}

</style>
