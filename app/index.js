var angular=require('angular');
var ngModule=angular.module('app',[]);
require('./directives')(ngModule);
require('./agcontrollers/index')(ngModule);  

