'use strict';

/**
 * @ngdoc function
 * @name moviefunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviefunApp
 */
angular.module('moviefunApp')
  .controller('MainCtrl', function ($http, $scope, guideBoxApiFactory) {
    
 	$scope.$watch('searchBarInput', function() {
      fetch();
    });

    $scope.searchBarInput = 'We';
    $scope.currentShow = {};
    $scope.searchResults = 'nothing yet..';
    console.log($scope.searchBarInput);
    console.log($scope.currentShow);
  
    function fetch(){
    
    $scope.getGenres();

    $scope.getSearchResults();
   
    }


    $scope.getGenres = function () {

      guideBoxApiFactory.getGenres() //get genres
                       .then(function (response) {
                            $scope.genres = response;                           
                            guideBoxApiFactory.getGenres() //nothing to pass
                                          .then(function (response) {
                                           $scope.genres = response.data;
                            });
                        });
    }

    $scope.getSearchResults = function () {

      guideBoxApiFactory.getSearchResults() //get genres
                       .then(function (response) {
                            $scope.searchResults = response;                           
                            guideBoxApiFactory.getSearchResults($scope.searchBarInput) //pass in search bar results
                                          .then(function (response) {
                                           $scope.searchResults = response.data;
                                           console.log('updated search results.. ');
                                           console.log(response);
                            });
                        });
    }

    
    $scope.updateCurrentShow = function(imageClicked){
    console.log('search results'+$scope.searchResults);
    
    $scope.currentShow = $scope.searchResults.results[imageClicked];

    guideBoxApiFactory.getSingleShowDetails() //get genres
                       .then(function (response) {
                            console.log($scope.currentShow.id);
                            $scope.currentShowDetails = response;                           
                            guideBoxApiFactory.getSingleShowDetails($scope.currentShow.id) //pass in clicked current show
                                          .then(function (response) {
                                           $scope.currentShowDetails = response.data;
                                           console.log('details: '+ response.data);
                            });

                        });
    } 

    $scope.update = function(movie){
      $scope.searchBarInput = movie.Title;
    };

    $scope.select = function(){
      $scope.setSelectionRange(0, $scope.value.length);
    }


    fetch();


   });
