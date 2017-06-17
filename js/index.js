var CLIENT_ID = '362fe166f33a4cefa305fceaf767d009';
var REDIRECT_URI = 'http://127.0.0.1/html/likeall.html';

$(document).ready(function () {
    var $button = $('#go_to_login_page');

    $button.click(function (event) {
        window.location.replace('https://api.instagram.com/oauth/authorize/?client_id=' + CLIENT_ID + '&redirect_uri=' + REDIRECT_URI + '&response_type=token&' +
            'scope=basic+likes+follower_list+public_content');
    });

});