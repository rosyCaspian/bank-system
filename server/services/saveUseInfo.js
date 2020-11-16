var fs = require('fs');

module.exports = function(usersData){
    usersData = usersData.map((user)=> {
        delete user.interest;
        return user;
    });
    var jsonStr = JSON.stringify(usersData);
    fs.writeFile('./data/users_data.json', jsonStr, function(err){
    if(err){
        console.error(err);
    }
    console.log('----------保存成功-------------');
    })
}