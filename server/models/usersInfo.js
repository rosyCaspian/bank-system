var fs = require('fs');

class User {
    //用户构造函数
    constructor({id, name, type_of_customer, current_acccount, savings_account, gender}) {
        //账户id
        this.id = id;
        //账户姓名
        this.name = name;
        //账户类型
        this.type_of_customer = type_of_customer;
        //活期账户余额
        this.current_acccount = current_acccount;
        //储蓄账户余额
        this.savings_account = savings_account;
        //用户性别
        this.gender = gender;
    }
    
    //获取用户 id
    getId() {
        return this.id;
    }

    //设置用户 id
    setId(id) {
        this.id = id;
    }

    //获取用户姓名
    getName() {
        return this.name;
    }

    //设置用户姓名
    setName(name) {
        this.name = name;
    }

    //获取账户类型
    getType_of_customer() {
        return this.type_of_customer;
    }

    //设置账户类型
    setType_of_customer(type_of_customer) {
        this.type_of_customer = type_of_customer;
    }

    //获取用户活期账户余额
    getCurrent_acccount_balance() {
        return this.current_acccount;
    }

    //设置用户活期账户余额
    setCurrent_acccount_balance(current_acccount) {
        this.current_acccount = current_acccount;
    }

    //获取用户储蓄账户余额
    getSavings_account_balance() {
        return this.savings_account;
    }

    //设置用户储蓄账户余额
    setSavings_account_balance(savings_account) {
        this.savings_account = savings_account;
    }
  }

function readUserInform(){
    //现将json文件读出来
    var res = new Array();
    var jsonObj = fs.readFileSync('./data/users_data.json', 'utf-8');
    //将二进制的数据转换为字符串
    var jsonStr = jsonObj.toString();
    //将字符串转换为 json 对象
    jsonMap = JSON.parse(jsonStr);

    for(var index in jsonMap){
        res[index] = new User(jsonMap[index]);
    }
    return res;
}
  
module.exports = readUserInform();


