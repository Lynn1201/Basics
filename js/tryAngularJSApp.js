/**
 * Created by Lyn on 2017/6/15.
 */

var myApp = angular.module('myApp',[]);

myApp.controller('BookCtrl', function BookCtrl($scope){
    $scope.books = [
        {'name': 'Effective Java', 'author':'Joshua Bloch'},
        {'name': 'Year without Pants', 'author':'Scott Berkun'},
        { 'name':'Confessions of public speaker','author':'Scott Berkun'},
        {'name':'JavaScript Good Parts','author':'Douglas Crockford'}
    ]
});
//$scope对象对视图是可见的
//$scope是控制器和视图之间的粘合剂，而且会注入到BookCtrl。