const usersInfo = require("./getUseInfo");
const saveUsersInfo = require('./saveUseInfo')


class Bank{
    constructor(usersData){
        this.usersData = usersData;
        this.round = 0;
        this.userNum = usersData.length;
        this.records = [];
    }

    //存钱至活期账户
    depositCurrentAccount(){
        var money = Bank.getRandomNum(100, 300);
        var user = Bank.getRandomNum(0, this.userNum-1);
        this.usersData[user].current_acccount += money;
        this.records.push({
            id: this.usersData[user].id,
            client: this.usersData[user].name,
            overall: money,
            round: this.round,
            status: 'SUCCESS',
            type:'depositCurrentAccount'
        });

        return {name: this.usersData[user].name, overall: '+ £'+money, type_of_customer: 'Current Account', transaction_type:"Deposit into current account"}
    }

    //存钱至储蓄账户
    depositSavingsAccount(){
        var money = Bank.getRandomNum(100, 300);
        var user = Bank.getRandomNum(0, this.userNum-1);
        this.usersData[user].savings_account += money;
        this.records.push({
            id: this.usersData[user].id,
            client: this.usersData[user].name,
            overall: money,
            round: this.round,
            status: 'SUCCESS',
            type:'depositSavingsAccount'
        });
        return {name: this.usersData[user].name, overall: '+ £'+money, type_of_customer: 'Savings Account',transaction_type:"Deposit into savings account"}
    }

    //从活期账户取钱
    withdrawalCurrentAccount(){
        var money = Bank.getRandomNum(100, 300);
        var user = Bank.getRandomNum(0, this.userNum-1);
        this.usersData[user].current_acccount -= money;
        this.records.push({
            id: this.usersData[user].id,
            client: this.usersData[user].name,
            overall: money,
            round: this.round,
            status: 'SUCCESS',
            type:'withdrawalCurrentAccount'
        });
        return {name: this.usersData[user].name, overall: '- £'+money, type_of_customer: 'Current Account',transaction_type:"Withdrawal from current account"}
    }

    //从储蓄账户取钱
    withdrawSavingsAccount(){
        var money = Bank.getRandomNum(100, 300);
        var user = Bank.getRandomNum(0, this.userNum-1);
        this.usersData[user].savings_account -= money;
        this.records.push({
            id: this.usersData[user].id,
            client: this.usersData[user].name,
            overall: money,
            round: this.round,
            status: 'SUCCESS',
            type:'withdrawSavingsAccount'
        });
        return {name: this.usersData[user].name, overall: '- £'+money, type_of_customer: 'Savings Account', transaction_type:"Withdrawal from savings account"}
    }

    //转账
    payMonies(){
        var money = Bank.getRandomNum(100, 300);
        while(1){
            var user_1 = Bank.getRandomNum(0, this.userNum-1);
            var user_2 = Bank.getRandomNum(0, this.userNum-1); 
            if(user_1 !== user_2){
                break;
            }
        }

        this.usersData[user_1].current_acccount -= money;
        this.usersData[user_2].current_acccount += money;
        this.records.push({
            id_in: this.usersData[user_1].id,
            id_out: this.usersData[user_2].id,
            client_in: this.usersData[user_1].name,
            client_out: this.usersData[user_2].name,
            money_out: money,
            money_in: money,
            overall: money*2,
            round: this.round,
            status: 'SUCCESS',
            type:'payMonies'
        });
        return {name_1: this.usersData[user_1].name, name_2: this.usersData[user_2].name, overall: money, type_of_customer: 'payMonies', transaction_type: "Pay monies"}
    }

    // 银行计算利息，分发到用户账户
    phrase(){
        for(var user of this.usersData){
            if(user.savings_account < 0){
                user.current_acccount += user.savings_account;
                user.savings_account = 0;
                if(user.current_acccount < 0){
                    user.current_acccount -= (-user.current_acccount*0.02);
                }
            }else{
                user.savings_account += (user.savings_account*0.01);
            }
        }
        Bank.saveUsersData(this.usersData);
    }

    start(){
        var res;
        this.round++;
        var option = Bank.getRandomNum(1, 5);
        switch (option){
            case 1:
                res=this.depositCurrentAccount();
                break;
            case 2:
                res=this.withdrawalCurrentAccount();
                break;
            case 3:
                res=this.depositSavingsAccount();
                break;
            case 4:
                res=this.withdrawSavingsAccount();
                break;
            case 5:
                res=this.payMonies();
                break;
            }
        Bank.saveUsersData(this.usersData);
        this.records.round = this.round;
        return res;
    }
    
    static getRandomNum(begin, end){
        return Math.floor(Math.round(Math.random()*(end-begin)+begin));
    }

    static saveUsersData = saveUsersInfo;
}

module.exports = new Bank(usersInfo);
