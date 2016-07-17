<template>
  <mt-popup :visible.sync="menu" position="right" class="mint-popup-3">
  </mt-popup>
  <mt-header fixed title="全部卡组" v-bind:class="{ 'open-menu': menu, 'close-menu' : !menu}">
  <mt-button v-link="'/'" slot="left" icon="back"></mt-button>
  <mt-button slot="right"   @click="openMenu" icon="more">
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
</template>
<script>
require('./../../assets/sass/index.scss')
import { getCardList } from '../../vuex/actions'

export default {
  data() {
    return {
      menu : false,
      page : 1
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
    this.getCardList(this.page)
  },
  methods: {
    loadTop(id) {
      this.$broadcast('onTopLoaded', id)
    },
    loadBottom(id) {
      setTimeout(() => {
        this.page = this.page + 1
        this.getCardList(this.page)

        if(this.page < 880) {
          this.allLoaded = true
        }

        this.$broadcast('onBottomLoaded', id)
      }, 100)
    },
    openMenu() {
      this.menu = true

    }
  }
}
</script>
<style>
.mint-header {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  height: 45px;
}
.mint-header .mint-button {
  color: silver;
}
.mint-header-title {
  color: gray;
  margin-top : 15px;
  margin-bottom: 10px;
}
.open-menu {
  -webkit-transform:translate(-50%,0);
  transition: transform 0.4s linear 0s;
}
.close-menu {
  transition: transform 0.2s linear 0s;
}
</style>
