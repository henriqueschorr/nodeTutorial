var myApp = angular.module('myApp', ['ngRoute'])

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
            controller: 'BooksController',
            templateUrl: 'views/books.html'
        })
        .when('/books', {
            controller: 'BooksController',
            templateUrl: 'views/books.html'
        })
        .when('/books/details/:id', {
            controller: 'BooksController',
            templateUrl: 'views/book_details.html'
        })
        .when('/books/add', {
            controller: 'BooksController',
            templateUrl: 'views/book_add.html'
        })
        .when('/books/edit/:id', {
            controller: 'BooksController',
            templateUrl: 'views/book_edit.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});