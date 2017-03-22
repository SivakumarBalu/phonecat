//Register the Phonelist component with template and controller.

angular.
module('phoneList').
component('phoneList',
{
    templateUrl:'phone-list/phone-list.template.html',
    controller: function PhoneListController(){
        this.phones = [
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
    }
});