var app = angular.module('parseQ')

app.controller('MainCtrl', function($scope, parseService){

    $scope.postData = function(){
        parseService.postQuestion($scope.questionText).then(function(){
                console.log($scope.questionText)
                $scope.questionText =''

            }

        )

getData()
    }

   var getData = function(){
        parseService.getData().then(function(question){
            $scope.questions = question.data.results
            console.log(question.data.results)
        })

    }
    $scope.removeQuestion = function(question){

        parseService.removeQuestion(question.objectId).then(function(){
    getData()}
        )
    }

getData()

})
