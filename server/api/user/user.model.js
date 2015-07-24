'use strict';


var userList = [
    {
        first_name: 'First',
        last_name: 'Tester',
        email: 'test@google.com',
        password: 'a1111111',
        id: 1
    },
    {
        first_name: 'First 2',
        last_name: 'Tester 2',
        email: 'test1@google.com',
        password: 'a1111111',
        id: 2
    },
    {
        first_name: 'First 3',
        last_name: 'Tester 3',
        email: 'test3@google.com',
        password: 'a1111111',
        id: 3
    }
];

function getUser(login, password){
    for(var i = 0; i< userList.length; i++) {
        var user = userList[i];
        if(user.email == login && user.password == password) {
            return user;
        }
    }
    return null;
}

function getUserById(id){
    for(var i = 0; i < userList.length; i++) {
        var user = userList[i];
        if(user.id == id) {
            return user;
        }
    }
    return null;
}

exports.getUser = getUser;
exports.findById = getUserById;

