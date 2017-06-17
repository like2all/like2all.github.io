window.Instagram = {
    /**
     * Store application settings
     */
    config: {},

    BASE_URL: 'https://api.instagram.com/v1',

    init: function (opt) {
        opt = opt || {};

        this.config.access_token = opt.access_token;
    },

    /**
     * Get a list of popular media.
     */
    popular: function (callback) {
        var endpoint = this.BASE_URL + '/media/popular?access_token=' + this.config.access_token;
        this.getJSON(endpoint, callback);
    },

    /**
     * Get a list of recently tagged media.
     */
    tagsByName: function (name, callback) {
        var endpoint = this.BASE_URL + '/tags/' + name + '/media/recent?access_token=' + this.config.access_token;
        this.getJSON(endpoint, callback);
    },

    /**
     * Get information about the owner of the access_token.
     * @param callback
     */
    getSelfInfo: function (callback) {
        var endpoint = this.BASE_URL + '/users/self/?access_token=' + this.config.access_token;
        this.getJSON(endpoint, callback)
    },

    /**
     * Get the list of users this user follows.
     */
    getFollowingUsers: function (callback) {
        var endpoint = this.BASE_URL + '/users/self/follows?access_token=' + this.config.access_token;
        this.getJSON(endpoint, callback)
    },

    /**
     * Get the list of users this user is followed by.
     */
    getFollowedByUsers: function (callback) {
        var endpoint = this.BASE_URL + '/users/self/followed-by?access_token=' + this.config.access_token;
        this.getJSON(endpoint, callback)
    },

    /**
     * Get the most recent media published by a user.
     */
    getRecentMediaPublishedByUser: function (userId, callback) {
        var endpoint = this.BASE_URL + '/users/' + userId + '/media/recent/?access_token=' + this.config.access_token;
        this.getJSON(endpoint, callback)
    },

    /**
     * Set a like on this media by the currently authenticated user.
     */
    setLikeOnMediaByCurrentUser: function (mediaId, callback) {
        var endpoint = this.BASE_URL + '/media/' + mediaId+ '/likes';
        var postData = {
            'access_token': this.config.access_token
        };
        this.postJSON(endpoint, postData, callback);
    },


    // PRIVATE METHODS
    getJSON: function (url, callback) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'jsonp',
            success: function (response) {
                if (typeof callback === 'function') callback(response);
            }
        });
    },
    
    postJSON: function (url, data, callback) {
        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'jsonp',
            success: function (response) {
                if (typeof callback === 'function') callback(response);
            }
        });
    }
};