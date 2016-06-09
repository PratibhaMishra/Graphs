'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'chart.js',
  'highcharts-ng',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider','ChartJsProvider','highchartsNGProvider',
function($routeProvider, ChartJsProvider, highchartsNGProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
  ChartJsProvider.setOptions({ colours : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
  highchartsNGProvider.lazyLoad();
  //highchartsNGProvider.lazyLoad([highchartsNGProvider.HIGHCHART/HIGHSTOCK, "maps/modules/map.js", "mapdata/custom/world.js"]);
  highchartsNGProvider.basePath("/js/");
}
]);
