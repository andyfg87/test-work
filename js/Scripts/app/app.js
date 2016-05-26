/**
 * Created by andy.fernandez on 5/20/2016.
 */
var app=angular.module('myApp', ['ngAnimate','ui.bootstrap' ]);
app.controller('CarouselDemoCtrl',function($scope){
        $scope.class="background1";
        $scope.day="1";
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
        if(value=='background1'){
            $scope.day="1";
        }else if(value=='background2'){
            $scope.day="2";
        }else if(value=='background3'){
            $scope.day="3";
        }else if(value=='background4'){
            $scope.day="4";
        }
    }
});

app.animation('.background2',function(){

    return{

        setup:function(element){

        },
        start: function(element, done, memo){

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
