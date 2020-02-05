<template>
<div>
  <app-header></app-header>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <app-footer></app-footer>
</div>
</template>

<script>
import Header from './static/Header';
import Footer from './static/Footer';
import {mapGetters} from 'vuex';

export default {
  name: 'app',
  components:{
    appHeader:Header,
    appFooter:Footer,
  },
  created() {
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("initProducts");
  }
}
</script>

<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s ease-out;
}
.fade-leave{}
.fade-leave-active{
  transition: opacity .5s ease-out;
  opacity: 0;
}
</style>
