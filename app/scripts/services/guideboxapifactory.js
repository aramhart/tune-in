'use strict';

/**
 * @ngdoc service
 * @name moviefunApp.guideBoxApiFactory
 * @description
 * # guideBoxApiFactory
 * Factory in the moviefunApp.
 */
angular.module('moviefunApp')
  .factory('guideBoxApiFactory', function ($http, baseUrl) {
    // Service logic
    // ...
    var api = {};

    api.getGenres = function () {
            return $http.get(baseUrl + 'genres')
                .then(
                function (response) {
                    return response
                });
    }

    api.getSearchResults = function (searchTerm) {
            return $http.get(baseUrl + 'search/title/' + searchTerm + '/fuzzy')
                .then(
                function (response) {
                    return response
                });
    }

    api.getSingleShowDetails = function (showId) {
            return $http.get(baseUrl + 'show/' + showId)
                .then(
                function (response) {
                    return response
                });
    }


    // Public API here
    //return {
     // someMethod: function () {
        return api;
     // }
   // };
  });
