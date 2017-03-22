//define the phonecatApp module
var phonecatApp = angular.module('phonecatApp',[]);

//define the PhoneListController in phonecatApp module
phonecatApp.controller('PhoneListController', function($scope){
    $scope.phones = [
        {
            name: "Nexus S",
            snippet: "Fast just got faster with Nexus S."
        },
        {
            name: "Motorloa XOOM with wifi",
            snippet: "The Next, Next Generation tablet."
        },
        {
            name: "Motorloa XOOM",
            snippet: "The Next, Next Generation tablet."
        }
    ];
});