<template>
    <div class="container">
        <el-row class="top">
            <el-col :span="titlesize">
            <div class="top-title">Transaction System</div>
            </el-col>
            <el-col :span="buttonsize" class="controll-button">
                <el-button :type="buttontype" round  @click="flash();start()" :disabled="inprocess">{{buttontitle}}</el-button>
            </el-col>
            <el-col :span="roundsize" class="controll-button">
                <div class="up">Round</div>
                <div class="down">{{round}}</div>
            </el-col>
        </el-row>
        <el-row class="content">
            <el-col :span="12">
                <transdialog type="Deposit into current account" icon="el-icon-wallet" class="dialog" color="in-color" :records="records_deposit_current"></transdialog>
            </el-col>
            <el-col :span="12">
                <transdialog type="Withdrawal from current account" icon="el-icon-bank-card" class="dialog" color="in-color" :records="records_withdrawal_current"></transdialog>
            </el-col>
        </el-row>
        <el-row class="content">
            <el-col :span="12">
                <transdialog type="Deposit into savings account" icon="el-icon-wallet" class="dialog" color="out-color" :records="records_deposit_savings"></transdialog>
            </el-col>
            <el-col :span="12">
                <transdialog type="Withdrawal from savings account" icon="el-icon-bank-card" class="dialog" color="out-color" :records="records_withdrawal_savings"></transdialog>
            </el-col>
        </el-row>
        <el-row class="content">
            <el-col :span="24">
                <transdialoglog type="Pay monies" icon="el-icon-wallet" class="dialog" color="out-color" :records="records_pay_monies"></transdialoglog>
            </el-col>
        </el-row>
        <!-- <el-row class="content">
            <el-col :span="24">
                <transdialog type="Pay monies" icon="el-icon-wallet" class="dialog" color=""></transdialog>
            </el-col>
        </el-row> -->
        <!-- <el-col :span="12">
                <transdialog type="Create a standing order" icon="el-icon-wallet" class="dialog" color=""></transdialog>
            </el-col> -->
    </div>
</template>

<script>
import transdialog from './TransDialog';
import transdialoglog from './TransDialogLog';
export default {
    name: 'transaction',
    data: function(){
        return {
            round: 0,
            maxRound: 10,
            buttontitle: 'Start',
            buttontype: 'warning',
            inprocess: false,
            titlesize: 18,
            buttonsize: 3,
            roundsize: 3,
            records: [],
            records_deposit_current: [],
            records_withdrawal_current: [],
            records_deposit_savings:[],
            records_withdrawal_savings:[],
            records_pay_monies: []
        }
    },
    components:{transdialog,transdialoglog},
    mounted(){
        this.$http.get("/api/process/record").then(function(res) {
            console.log("success");
            this.round = res.body[res.body.length-1].round;
            this.records = res.body;
            this.records_deposit_current = res.body.reduce((total, current) => {
                current.type === "depositCurrentAccount" && total.push(current);
                return total;
            }, []);
            this.records_withdrawal_current = res.body.reduce((total, current) => {
                current.type === "withdrawalCurrentAccount" && total.push(current);
                return total;
            }, []);
            this.records_deposit_savings = res.body.reduce((total, current) => {
                current.type === "depositSavingsAccount" && total.push(current);
                return total;
            }, []);
            this.records_withdrawal_savings = res.body.reduce((total, current) => {
                current.type === "withdrawSavingsAccount" && total.push(current);
                return total;
            }, []);
            this.records_pay_monies = res.body.reduce((total, current) => {
                current.type === "payMonies" && total.push(current);
                return total;
            }, []);
        },function(res) {
          console.log('fail...', res);
        });
    },
    methods:{
        update_s(){
            this.$http.get("/api/process/record").then(function(res) {
                console.log("update success");
                this.round = res.body[res.body.length-1].round;
                this.records = res.body;
                this.records_deposit_current = res.body.reduce((total, current) => {
                current.type === "depositCurrentAccount" && total.push(current);
                return total;
                }, []);
                this.records_withdrawal_current = res.body.reduce((total, current) => {
                current.type === "withdrawalCurrentAccount" && total.push(current);
                return total;
                }, []);
                this.records_deposit_savings = res.body.reduce((total, current) => {
                current.type === "depositSavingsAccount" && total.push(current);
                return total;
                }, []);             
                this.records_withdrawal_savings = res.body.reduce((total, current) => {
                current.type === "withdrawSavingsAccount" && total.push(current);
                return total;
                }, []);
                this.records_pay_monies = res.body.reduce((total, current) => {
                current.type === "payMonies" && total.push(current);
                return total;
                }, []);
            })
        },
        update(){
            this.$http.get("/api/process/record").then(function(res) {
                console.log("update success");
                this.round = res.body[res.body.length-1].round;
                this.records = res.body;
                this.records_deposit_current = res.body.reduce((total, current) => {
                current.type === "depositCurrentAccount" && total.push(current);
                return total;
                }, []);
                this.records_withdrawal_current = res.body.reduce((total, current) => {
                current.type === "withdrawalCurrentAccount" && total.push(current);
                return total;
                }, []);
                this.records_deposit_savings = res.body.reduce((total, current) => {
                current.type === "depositSavingsAccount" && total.push(current);
                return total;
                }, []);             
                this.records_withdrawal_savings = res.body.reduce((total, current) => {
                current.type === "withdrawSavingsAccount" && total.push(current);
                return total;
                }, []);
                this.records_pay_monies = res.body.reduce((total, current) => {
                current.type === "payMonies" && total.push(current);
                return total;
                }, []);
                console.log("round ", this.round)
                this.update_s();
                if((this.round >= 10) && ((this.round % 10)===0)){
                    this.buttontitle = 'Phrase';
                    this.buttontype = 'success';
                    this.titlesize = 18;
                    this.buttonsize = 3;
                    this.inprocess = false;
                }
                if(this.round < this.maxRound){
                    setTimeout(()=>{
                        this.update_s();
                        this.start();
                    }, 5000);
                }else{
                    this.maxRound = this.maxRound + 10; 
                    console.log(this.maxRound)
                }
            },function(res) {
                console.log('fail...', res);
            });
        },
        process(){
            console.log("process start")
            this.$http.get("/api/process/start").then(function(res) {
                console.log("processing...");
                var r = res.body;
                const loading = this.$loading({
                    lock: true,
                    text: r.transaction_type + " is chosen~",
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.8)',
                });
/*                 setTimeout(() => {
                    loading.close();
                }, 2000); */
                setTimeout(() => {
                    loading.close();
                    var message;
                    var message_2;
                    if (r.type_of_customer !== "payMonies"){
                        message = r.name + "'s " + r.type_of_customer + " " + r.overall + ".00";
                        this.$message({
                            showClose: true,
                            message: message,
                            type: 'success',
                            duration: 3600,
                        });
                    }else{
                        message = r.name_1 + "'s Current Account - £" + r.overall+ ".00"
                        message_2 = r.name_2 + "'s Current Account + £" + r.overall + ".00";
                        this.$message({
                            showClose: true,
                            message: message,
                            type: 'success',
                            duration: 2000,
                        });
                        setTimeout(() => {
                            this.$message({
                                showClose: true,
                                message: message_2,
                                type: 'success',
                                duration: 2000,
                            });  
                        }, 2200);
                        
                    }
                    // 更新数据
                    this.update();
                }, 2600);
                },function(res) {
                    console.log('fail...', res);
                },);
        },
        flash(){
            if(this.buttontitle === 'Start')
            {
                try {
                    this.maxRound = this.records[this.records.length-1].round + 10;
                }
                catch(err){
                    console.log('null');
                    this.maxRound = 10;
                }
                this.buttontitle = 'Processing';
                this.inprocess = true;
                this.buttontype = 'info';
                this.titlesize = 17;
                this.buttonsize = 4;
                console.log(this.maxRound)
            }
        },
        start(){
            this.update_s();
            if(this.buttontitle !== 'Phrase')
            {
                const loading1 = this.$loading({
                text: 'Transaction in progress...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.8)',
                });
                setTimeout(() => {
                    loading1.close();
                }, 1800);
                setTimeout(() => {
                    this.process();
                }, 2000);
            }else{
                this.$http.get("/api/process/phrase").then(function(res) {
                    console.log(res.status);
                });
                this.buttontitle = 'Start';
                this.buttontype = 'warning';
                const h = this.$createElement;
                this.$notify({
                    type: 'success',
                    title: 'Bank phrase success',
                    offset: 105,
                    duration: 2600,
                    message: h('i', { style: 'color: teal'}, 'Interest has been calculated and distributed to user accounts～')
                });
                setTimeout(() => {
                    this.$router.push('/users')
                }, 2600);
            }
                
        },

        /* choose(){
            const loading = this.$loading({
                lock: true,
                text: 'Withdrawal from savings account is chosen～',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.8)',
            });
            setTimeout(() => {
                loading.close();
                this.process();
            }, 2600);
        } */
    }
}
</script>

<style scoped>
div{
    margin:0;
    padding:0;
}
.top {
    background-color: #fff;
    margin-top: -2.8rem;
    margin-bottom: 3rem;
    border-bottom-right-radius: 1.2rem;
    
}
.top-title{
    background-color: #fff;
    height:6rem;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: start;
    padding-left: 2rem;
    padding-top: 1.3rem;
    color: #2763d5;
}
.controll-button{
    background-color: #fff;
}
.el-button{
    font-weight: bold;
    font-size: 1.27rem;
    margin-top: 1.9rem;
}
.up{
    text-align: start;
    font-size: 1.1rem;
    font-weight: bold;
    color: #b0b0bb;
    background-color: #fff;
    margin-bottom: .2rem;
    padding-left: 0rem;
    margin-top: 1rem;
}
.down{
    text-align: start;
    margin-top: 0.5rem;
    font-size: 2rem;
    font-weight: bold;
    color: #272532;
    background-color: #fff;
    padding-left: .6rem;
}
.container{
    margin-top: 3rem;
    margin-left: 4.5rem;
    display: flex;
    flex-direction: column;
}


.dialog{
    margin: 1.2rem;
}

</style>