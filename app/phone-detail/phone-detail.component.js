angular.module('phoneDetail').component('phoneDetail',{
    templateUrl: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
    controller: ['$routeParams', PhoneDetailController]
});

function PhoneDetailController($routeParams)
{
    this.phoneId = $routeParams.phoneId;
}