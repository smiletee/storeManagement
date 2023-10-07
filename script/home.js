async function oninitHonePage() {
    console.log('--homw page---')
     $scope.pageName = 'wellcome.html';
    var app = angular.module('myApp', []);

    app.controller('myCtrl', function ($scope) {
        $scope.pageName = 'wellcome.html';
    });

}

