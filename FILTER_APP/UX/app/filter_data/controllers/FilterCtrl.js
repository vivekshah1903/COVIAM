/*****************
@Author:Vivek Shah
******************/
(function() {
    'use strict';

    angular.module('app.filterData').controller('FilterCtrl', filterCtrl);

    filterCtrl.$inject = ['$scope','$http'];

    //Controller implementation
    function filterCtrl($scope,$http) {

        //first api call
        $http  
        ({  
            method: "GET",  
            url: "https://swapi.co/api/people",  
            headers:   
            {  
                "Accept": "application/json"  
            }  
        }).success(function(data, status, headers, config)   
        {  
             $scope.data1 = data.results;
             angular.forEach($scope.data1, function(resultData,key)        
             {    
               var film = [];
                  angular.forEach(resultData.films, function(filmsAPi,key)            
                  {    
                      //calllAPI-             
                      var filmApiData = filmsAPi;                            
                      $http({                        
                              method: 'GET',
                              headers:   
                              {  
                                  "Accept": "application/json"  
                              },                
                              url: filmApiData
                    }).success(function(data, status, headers, config)
                    {                   
                       film.push(data['title']);          
                    }).error(function(){            
                                  alert("error");  
                     });        
                      resultData.list =film;
                    })        
                })
            })
    }       
})();