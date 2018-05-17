/*****************
@Author:Vivek Shah
******************/
(function() {
    'use strict';
    angular.module('app.filterData').config(function config($stateProvider) {
        $stateProvider.state('filterdata', {
            url: '/filterdata',
            controller: 'FilterCtrl',
            templateUrl: 'UX/app/filter_data/partials/filterData.html'
        })
    });
})();
