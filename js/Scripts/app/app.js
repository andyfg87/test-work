/**
 * Created by andy.fernandez on 5/20/2016.
 */
var app=angular.module('myApp', ['ui.bootstrap']);
app.controller('CarouselDemoCtrl',function($scope){
        $scope.class="background1";
    $scope.slides = [

            $scope.class="background1"
        ,
            $scope.class="background1"
        ,
            $scope.class="background1"
        ,
            $scope.class="background1"

    ];



    $scope.changeBackground=function(value){
        $scope.class=value;
    }
});
/*../download
function CarouselDemoCtrl($scope){
    $scope.myInterval = 3000;
    $scope.slides = [
        {
            image: 'http://lorempixel.com/400/200/'
        },
        {
            image: 'http://lorempixel.com/400/200/food'
        },
        {
            image: 'http://lorempixel.com/400/200/sports'
        },
        {
            image: 'http://lorempixel.com/400/200/people'
        }
    ];
}*/
