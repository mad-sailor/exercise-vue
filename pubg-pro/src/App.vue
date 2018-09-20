<template>
  <div id="#app">
    <my-header></my-header>
    <div class="test">
      <transition :enter-active-class="entermethod" :leave-active-class="leavemethod">
        <router-view @showmethod="jumpto" @leavemethod="backto"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import myHeader from '@/components/myHeader.vue';
  import './assets/css/base.css';
  import './assets/css/iconfont.css';

  export default {
    data(){
      return {
        entermethod:'',
        leavemethod:''
      }
    },
    components:{
      myHeader
    },
    methods:{
      jumpto(url){
        this.entermethod = 'animated zoomIn';
        this.leavemethod = 'animated';
        this.$router.push(url);
      },
      backto(url){
        this.entermethod = 'animated';
        this.leavemethod = 'animated rotateOutDownLeft';
        this.$router.push(url);
      }
    },
    watch:{},
    computed:{},
    mounted(){}
  }
</script>

<style scoped>
  .move-enter-active,.move-leave-active{
    transition: all 1s linear;
  }
  .move-enter{
    left: 100%;
  }
  .move-enter-to{
    left: 0%;
  }
  .move-leave{
    left: 0%;
  }
  .test{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>