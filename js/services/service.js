var app = angular.module('parseQ')

app.service('parseService', function($http){

    this.postQuestion = function(question) {

        return $http({
            method: 'POST',
            url: 'https://api.parse.com/1/classes/questions',
            data: {
                theQuestion : question
            }

        })
    }

    this.getData = function(data){
        return $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/questions/'
        })
    }

    this.removeQuestion = function(question){
        return $http({
            method: 'DELETE',
            url: 'https://api.parse.com/1/classes/questions/' + question
        })
    }
})