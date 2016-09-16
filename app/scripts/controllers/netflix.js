'use strict';

/**
 * @ngdoc function
 * @name moviefunApp.controller:NetflixCtrl
 * @description
 * # NetflixCtrl
 * Controller of the moviefunApp
 */
angular.module('moviefunApp')
  .controller('NetflixCtrl', function () {
    this.netflixThings = [
      'Jurassic Park',
      'Jerrys Acid Park',
      'Twister'
    ];
    console.log('hello!');
    
  });
