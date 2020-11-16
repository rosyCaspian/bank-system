<template>
  <div id="app">
    <navmenu></navmenu>
  </div>
</template>

<script>
import navmenu from './components/NavMenu';

export default {
  name: 'app',
  data: function(){
    return {
    }
  },
  components:{navmenu},
  mounted: function(){
    this.$message({
          message: 'Welcome to My Bank',
          duration: 2000,
          center:true,
          iconClass: 'el-icon-sunny',
          customClass: 'welcome'
    });
  },
  methods: {
  }
}
</script>

<style>
/* 全局 css 样式 */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #edeff2;
  height: 100%;
}

*{
  margin: 0;
  padding: 0;
}

html,body,div{
  margin: 0;
  padding: 0;
}

/* 路由切换的过度效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.welcome {
  color: #ff6665;
  font-size: 2rem;
  font-weight: bolder;
  height: 2.8rem;
  width: 1rem;
  margin-top: 1.5rem;
}
</style>
