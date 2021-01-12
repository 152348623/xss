var orderDataService = {
    sendOrder: sendOrder,
    getInquireOrder: getInquireOrder,
    cancelInquireOrder: cancelInquireOrder,
    getOrderIfSuccess: getOrderIfSuccess,
    getAllComment: getAllComment,
    sendCommentFOrOrder: sendCommentFOrOrder,
    removeComment: removeComment,
    userLogin: userLogin,

    setUserToken: setUserToken,
    getUserToken: getUserToken,
    setUserName: setUserName,
    getUserName: getUserName

}

var token;
var userName = "";
// var url = "https://10.106.10.161:5000/backend/"
var url = "http://192.168.2.105:5000/backend/"
// var url = "http://127.0.0.1:5000/backend/"


// API

function sendOrder(orderData) {
    $.ajax({
        url: url + "sendOrder",
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(orderData),
        success: function (data) {
            window.location.href = 'checkOrder.html';
        },
        error: function () {
            alert("Phone is exist or other error!")
        }
    });
}

function getInquireOrder(phone, onSuccess, onFailure) {
    $.ajax({
        url: url + "getInquireOrder?phone=" + phone,
        type: "GET",
        contentType: 'application/json; charset=UTF-8',
        success: onSuccess,
        error: onFailure
    });
}

function cancelInquireOrder(phone, onSuccess, onFailure) {
    $.ajax({
        url: url + "cancelInquireOrder",
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(phone),
        success: onSuccess,
        error: onFailure
    });
}

function getOrderIfSuccess(onSuccess, onFailure) {
    $.ajax({
        url: url + "getOrderIfSuccess",
        type: "GET",
        contentType: 'application/json; charset=UTF-8',
        success: onSuccess,
        error: onFailure
    });
}

function getAllComment(onSuccess, onFailure) {
    $.ajax({
        url: url + "getAllComment",
        type: "GET",
        contentType: 'application/json; charset=UTF-8',
        success: onSuccess,
        error: onFailure
    });
}

function sendCommentFOrOrder(data, onSuccess, onFailure) {

    $.ajax({
        url: url + "sendCommentFOrOrder",
        type: "POST",
        data: JSON.stringify(data),
        contentType: 'application/json; charset=UTF-8',
        success: onSuccess,
        error: onFailure
    });
}

function removeComment(data, onSuccess, onFailure) {
    $.ajax({
        url: url + "removeComment",
        type: "POST",
        data: JSON.stringify(data),
        contentType: 'application/json; charset=UTF-8',
        success: onSuccess,
        error: onFailure
    });
}

function userLogin(data, onSuccess, onFailure) {
    $.ajax({
        url: url + "userLogin",
        type: "POST",
        data: JSON.stringify(data),
        contentType: 'application/json; charset=UTF-8',
        success: onSuccess,
        error: onFailure
    });
}

function setUserToken(data) {
    token = data;
}

function getUserToken() {
    return token;
}

function setUserName(name) {
    userName = name;
}

function getUserName() {
    return userName;
}



$(document).ready(function () {

    var $userName = document.getElementById('userName');
    var $login = document.getElementById('login');
    var userInfo = localStorage.getItem("userInfo")
    if (userInfo != null) {
        userInfo = JSON.parse(userInfo);
        $userName.style.cssText = "display: initial";
        $login.style.cssText = "display: none";

        $userName.html(userInfo.name)
        console.log('AAA user');
    } else { // login
        $userName.style.cssText = "display: none";
        $login.style.cssText = "display: initial";
        console.log('AAA login');
    }

});

