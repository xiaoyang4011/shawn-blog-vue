<template>
    <!-- 全局header -->
    <div>
        <img class="index" src="./../../assets/images/index.png">
    </div>
</template>
<script>
export default {

  ready () {
    setTimeout(() => {
      this.$route.router.go({ name: 'cards'})
    },2000)
  }
}

</script>
<style >
.index{
    width: 100%;
    background-color: #fff;
    margin-top: 40%;
}
</style>
