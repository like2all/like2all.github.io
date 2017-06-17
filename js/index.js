var CLIENT_ID = '782ccc18782549fd934d1e20040968f9';
var REDIRECT_URI = 'https://like2all.github.io/html/likeall.html';

$(document).ready(function () {
    var $button = $('#go_to_login_page');

    $button.click(function (event) {
        window.location.replace('https://api.instagram.com/oauth/authorize/?client_id=' + CLIENT_ID + '&redirect_uri=' + REDIRECT_URI + '&response_type=token&' +
            'scope=basic+likes+follower_list+public_content');
    });

});