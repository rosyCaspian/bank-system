<template>
    <div class="container">
        <el-row class="top">
            <el-col :span="19"> 
                <div class="top-title">{{ name }}</div>
            </el-col>
        </el-row>
        <el-row class="information">
            <el-col :span="8" class="info-block">
                <div class="info-content">
                    <div class="info-content-up">
                        <div class="info-content-up-title">ID</div>
                        <div class="info-content-up-content">{{ id }}</div>
                    </div>
                    <div class="info-line-row"></div>
                    <div class="info-content-down">
                        <div class="info-content-down-title">Saving Account</div>
                        <div class="info-content-down-content">{{ "£"+savingaccount.toFixed(2) }}</div>
                    </div>
                </div>
                <div class="info-line-1"></div>
            </el-col>
            <el-col :span="8">
                <div class="info-content">
                    <div class="info-content-up">
                        <div class="info-content-up-title">Gender</div>
                        <div class="info-content-up-content">{{ gender }}</div>
                    </div>
                    <div class="info-line-row"></div>
                    <div class="info-content-down">
                        <div class="info-content-down-title">Current Account</div>
                        <div class="info-content-down-content">{{ "£"+currentaccount.toFixed(2) }}</div>
                    </div>
                </div>
                <div class="info-line-2"></div>
            </el-col>
            <el-col :span="8">
                <div class="info-content">
                    <div class="info-content-up">
                        <div class="info-content-up-title">Account Type</div>
                        <div class="info-content-up-content">{{ accounttype }}</div>
                    </div>
                    <div class="info-line-row"></div>
                    <div class="info-content-down">
                        <div class="info-content-down-title">Overall</div>
                        <div class="info-content-down-content">{{ "£"+overall.toFixed(2) }}</div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>

</template>

<script>
export default {
    name:'userdialog',
    data: function(){
        return {
            isNewRecord: true,
        }
    },
    props: ['id', 'savingaccount', 'gender', 'currentaccount', 'accounttype', 'overall', 'name'],
    mounted(){

    },
    methods: {
    },

}
</script>

<style scoped>
.container{
    width: 30rem;
/*     border-style: solid;
    border-width: 0.2rem; */
    margin-top: 1.8rem;
    display: flex;
    flex-direction: column;
    height: 15rem;
}
.top{
    width: 30rem;
}
.item{
    margin-left: -16.7rem;
    margin-top: -3rem;
}
.top-title{
    text-align: start;
    font-size: 2rem;
    font-weight: bold;
}
.information{
    background-color: #fff;
    height: 9.5rem;
    margin-top: 0.5rem;
    border-radius: 1.5rem;
    box-shadow: 0 0 6px rgba(0, 0, 0, .06);
    padding: 0.5rem;
    padding-left: .6rem;
    padding-right: .6rem;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
}
.info-block{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.info-content{
    text-align: start;
    margin-left: 0.8rem;
}
.info-line-1{
    width: 0.095rem;
    background-color: rgba(0, 0, 0, .06);
    height: 6.45rem;
    margin-top:0.3rem;
    margin-left: -100rem;
} 
.info-line-2{
    width: 0.095rem;
    background-color: rgba(0, 0, 0, .06);
    height: 6.6rem;
    margin-left: 9.6rem;
    margin-top: -6.88rem;
}
.info-line-row{
    width: 7.5rem;
    height: 0.09rem;
    background-color: rgba(0, 0, 0, .06);
    margin-bottom: .4rem;
    margin-top: .4rem;
}
.info-content-up-title {
    color: #b9b9bd;
    font-size: 1rem;
    font-weight: bold;
}
.info-content-down-title{
    color: #b9b9bd;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: .1rem;
}
.info-content-up-content{
    font-weight: bold;
    margin-bottom: .3rem;
    margin-top:0.15rem;
    font-size: 1.2rem;
}
.info-content-down-content{
    font-weight: bold;
    margin-top:0.1rem;
    font-size: 1.2rem;
}
</style>