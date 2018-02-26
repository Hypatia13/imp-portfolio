window.onload = function() {

    var socket = new WebSocket('wss://obscure-waters-98157.herokuapp.com');
    var connectionStatus = document.getElementById('connectionStatus');

    var messageList = document.getElementById('messageList');
    var messageForm = document.getElementById('messageForm');
    var messageField = document.getElementById('message');

    socket.onopen = function(event) {
        connectionStatus.innerHTML = 'Connected to: ' + event.currentTarget.url;
    };

    socket.onmessage = function(event) {
        var message = event.data;
        messageList.innerHTML += '<li>' + message + '</li>';
    };

    messageForm.onsubmit = function(e) {
        e.preventDefault();
        var message = messageField.value;
        socket.send(message);
        messageList.innerHTML += '<li>' + message + '</li>';
        messageField.value = '';

        return false;
    };



    socket.onerror = function(error) {
        console.log('WebSocket Error: ' + error);
    };

};