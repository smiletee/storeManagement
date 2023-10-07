async function oninitHonePage() {
    console.log('--homw page---')
    var app = angular.module('myApp', []);

    app.controller('myCtrl', function ($scope) {
        $scope.pageName = 'wellcome.html';
    });

}

