angular.module('meanApp', ['ngMaterial', 'ngAnimate', 'ngResource']);

var app = angular.module('meanApp');



//registering controller
app.controller('meanController',meanController);

angular.module('meanApp').factory('customUtilFactory',customUtilFactory);