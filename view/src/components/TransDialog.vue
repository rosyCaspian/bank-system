<template>
    <div class="container">
        <el-row class="top">
            <el-col :span="22">
                <div class="title">{{type}}</div>
            </el-col>
            <el-col :span="2">
                <div class="icon"><i :class="icon+' ' + color" ></i></div>
            </el-col>
        </el-row>
        <div class="line"></div>
        <div class="content" ref="chatContent">
            <el-row class="record" v-for="(record, index) in records" :key="index">
                <div class="status">
                    <i class="el-icon-success"></i>
                    {{record.status}}
                </div>
                <div class="id">
                    <div class="up">ID</div>
                    <div class="down">{{record.id}}</div>
                </div>
                <div class="client">
                    <div class="up">Client</div>
                    <div class="down">{{record.client}}</div>
                </div>
                <div class="overall">
                    <div class="up">Overall</div>
                    <div class="down">{{"£" + record.overall.toFixed(2)}}</div>
                </div>
                <div class="round">
                    <div div class="up">Round</div>
                    <div class="down">{{record.round}}</div>
                </div>
            </el-row>
            
            <!-- <el-row class="record">
                <div class="status">
                    <i class="el-icon-warning" style="font-size:1.2rem;"></i>
                    FAILED
                </div>
                <div class="id">
                    <div class="up">ID</div>
                    <div class="down">123</div>
                </div>
                <div class="client">
                    <div class="up">Client</div>
                    <div class="down">Letters</div>
                </div>
                <div class="overall">
                    <div class="up">Overall</div>
                    <div class="down">$231</div>
                </div>
                <div class="round">
                    <div class="up">Round</div>
                    <div class="down"></div>
                </div>
            </el-row> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'transdialog',
    data: function(){
        return {
        }
    },
    props:['type','records','icon','color'],
    watch:{
        records(){
            // 让记录栏一直滚动到最下面的记录
            this.$nextTick(() =>{ this.$refs.chatContent.scrollTop = this.$refs.chatContent.scrollHeight; });
        }
    }
}
</script>

<style scoped>
.container {
    width: 39.5rem;
    background-color: #fff;
    height: 25rem;
    border-radius: 1rem;
}
.top{
    height: 4rem;
}
.title{
    background-color: #fff;
    text-align: start;
    padding-left: 2rem;
    border-top-left-radius: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
    padding-top: 1.2rem;
}
.icon{
    background-color: #fff;
    text-align: start;
    border-top-right-radius: 1rem;
    padding-top: 1.3rem;
    font-weight: bolder;
    font-size: 1.5rem;
}
.line {
    width: 88%;
    height: 1px;
    margin: 0 auto;
    background-color: #ededed;
}
.content{
    margin-top: 1.5rem;
    background-color: #fff;
    height: 17rem;
    border-width: 3px;
    overflow: auto;
    padding-left: 1.83rem;
    padding-right: 1.83rem;
}
.record{
    height: 4rem;
    margin-bottom: 1.5rem;
    background-color: #fff;
    display: flex;
    flex-direction: row;
}
.el-icon-success{
    font-size:1.3rem;
    color: #62d861;
}
.el-icon-warning{
    font-size:1.3rem;
    color:#ffce71;
}
.status{
    width: 7.9rem;
    border-radius: 1rem;
    border-color: #efefef;
    background-color: #fff;
    text-align: start;
    line-height: 3.9rem;
    font-weight: bold;
    padding-left: 0.4rem;
}
.status:hover{
    background-color: #6f98f1;
    width: 7.93rem;
    height: 3.93rem;
    line-height: 3.93rem;
    color: white !important;
}
.id{
    display: flex;
    flex-direction: column;
    width: 5.5rem;
    margin-left: 1.4rem;
    background-color: #fff;
    padding-top: .33rem;
}
.up{
        text-align: start;
        font-size: 1.1rem;
        font-weight: bold;
        color: #b0b0bb;
        background-color: #fff;
        margin-bottom: .2rem;
}
.down{
    text-align: start;
    margin-top: 0.05rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: #272532;
    background-color: #fff;
}

.id{
    display: flex;
    flex-direction: column;
    width: 5rem;
    margin-left: 1.4rem;
    background-color: #fff;
    padding-top: .33rem;
}
.client{
    display: flex;
    flex-direction: column;
    width: 5.7rem;
    margin-left: 1.4rem;
    background-color: #fff;
    padding-top: .33rem;
}
.overall{
    display: flex;
    flex-direction: column;
    width: 5rem;
    margin-left: 1.4rem;
    background-color: #fff;
    padding-top: .33rem;
}
.round{
    display: flex;
    flex-direction: column;
    width: 5rem;
    margin-left: 1.4rem;
    background-color: #fff;
    padding-top: .33rem;
}

.out-color{
    color: #f3d187;
}

.in-color{
    color: #62d861;
}

</style>