var ACCESS_TOKEN = window.location.hash.split("=")[1];

Instagram.init({
    access_token: ACCESS_TOKEN
});

$( document ).ready(function() {
    var $likedSection = $('#liked');

   Instagram.getFollowingUsers(function (data) {
       // console.log('getFollowingUsers', data);

       var followingUsers = data.data;
       followingUsers.forEach(function (followingUser, index, array) {

           $likedSection.append("<h3>Started to like " + followingUser.full_name + "'s media: </h3>");
           $likedList = $("<ol id='" + followingUser.id + "'></ol>");
           $likedSection.append($likedList);

           Instagram.getRecentMediaPublishedByUser(followingUser.id, function (data) {
               // console.log('getRecentMediaPublishedByUser', data);

               var mediums = data.data;
               mediums.forEach(function (mediaItem, index, array) {
                   Instagram.setLikeOnMediaByCurrentUser(mediaItem.id, function (data) {
                       // console.log('setLikeOnMediaByCurrentUser', data);
                       $likedList.append("<li>liked media with id: " + mediaItem.id + " @ <a href='" + mediaItem.link + "' target='_blank'>" + mediaItem.link + "</a></li>");
                   })
               });
           });
       });

   });

});