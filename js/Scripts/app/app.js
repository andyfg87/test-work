/**
 * Created by andy.fernandez on 5/20/2016.
 */
var app=angular.module('myApp', ['ngAnimate','ui.bootstrap' ]);
app.controller('CarouselDemoCtrl',function($scope){
        $scope.class="background1";
    $scope.slides = [

            $scope.class="background4"
        ,
            $scope.class="background2"
        ,
            $scope.class="background3"
        ,
            $scope.class="background1"

    ];



    $scope.changeBackground=function(value){

        $scope.class=value;

    }
});

app.animation('.background2',function(){
    alert('Hola');
    return{

        setup:function(element){

        },
        start: function(element, done, memo){
            alert('Hola');
        }
    };
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
