<template>
    <div class="container">
        <div class="nav">
            <div class="icon">Bank</div>
            <div class="transaction" @click="tabChange('/transaction')"><i class="el-icon-coin"></i></div>
            <div class="users" @click="tabChange('/users')"><i class="el-icon-user"></i></div>
        </div>
        <transition name="slide-fade">
        <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'navmenu',
    data: function(){
        return {}
    },
    methods:{
        tabChange(which){
            this.$router.push(which)
        }
    },
    mounted: function(){
        this.$router.push('/transaction')
    }
}
</script>


<style scoped>
.container {
    display: flex;
    flex-direction: row;
    background-color: #eeedf2; 
    height: 100%;
    min-height: 100vh;
}

.nav {
    width: 4.4rem;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 1.3rem;
    border-bottom-left-radius: 1.3rem;
    position: fixed;
    background-color: #4983f0;
    height: 100%;
    z-index: 10;
}


.icon {
    background-color: #2763d5;
    border-top-left-radius: 1.26rem;
    color: #f2fcff;
    font-weight: bolder;
    height: 4.6rem;
    text-align: center;
    height: 4.6rem;
    line-height: 4.6rem;
    font-size: 1.3rem;
    width: 4.4rem;
}
.users{
    height: 4.6rem;
    background-color: #4983f0;
    color: #cfe4fd;
    line-height: 4.6rem;
    font-size: 1.7rem;
    border-color: #538dfa;
}
.transaction {
    height: 4.6rem;
    background-color: #4983f0;
    color: #cfe4fd;
    line-height: 4.6rem;
    font-size: 1.7rem;
    border-color: #538dfa;
    border-bottom-style:solid;
    border-width:0.2rem;
}
.overview:hover{
    background-color: #62d861;
}
.transaction:hover{
    background-color: #62d861;
}
.users:hover{
    background-color: #62d861;
}


</style>