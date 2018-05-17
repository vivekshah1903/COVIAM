angular.module('app.common', []);
angular.module('app.filterData', []);

angular.module('app', ['ui.router', 'app.common','app.filterData','ui.bootstrap'])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $stateProvider.state('app', {
        url: '/filterdata'
    });
    $urlRouterProvider.otherwise('/filterdata');

}]).constant('CONFIG', {

}).controller('MainController', ['$scope', '$rootScope', '$location', function($scope, $rootScope) {


}]).run(function($rootScope) {



});
