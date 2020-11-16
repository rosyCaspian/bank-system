<template>
    <div class="container">
        <el-row class="top">
            <el-col :span="24">
            <div class="top-title">Users Information</div>
            </el-col>
        </el-row>
        <div class="content">
            <userdialog class="content-dialog" v-for="(item, index) in usersData" :key="index" :id="item.id" :savingaccount="item.savings_account" :currentaccount="item.current_acccount" :name="item.name" :accounttype="item.type_of_customer" :overall="item.current_acccount + item.savings_account" :gender="item.gender">
            </userdialog>
        </div>
    </div>
</template>

<script>
import userdialog from './UserDialog';
export default {
    name: 'users',
    data: function(){
        return {
            usersData: []
        }
    },
    components: {userdialog},
    mounted: function(){
        this.$http.get("/api/info").then(function(res) {
            console.log("success");
            this.usersData = res.body;
            console.log(this.usersData);
        },function(res) {
          console.log('fail...', res);
        }) 
    }
}
</script>

<style scoped>
.container{
    margin-left: 4rem;
    margin-right: 3.5rem;
    background-color: #f7f6f8 !important;
    display: flex;
    flex-direction: column;
}
.top {
    background-color: #fff;
    margin-bottom: 2.3rem;
    width: 84rem;
    border-bottom-right-radius: 1.5rem;
}
.top-title{
    background-color: #fff;
    height:6rem;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: start;
    padding-left: 2.5rem;
    padding-top: 1.5rem;
    color: #2763d5;
    border-bottom-right-radius: 1.5rem;
}
.content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 86rem;
}
.content-dialog{
    width: 35.5rem;
}
</style>