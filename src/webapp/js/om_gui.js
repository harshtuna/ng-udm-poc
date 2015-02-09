(function () {
    var app = angular.module('orderManagement', []);

    app.controller('BusinessDataController', function businessDataController() {
        this.businessData = workItem.businessData;
    });

    app.controller('UserDefinedDataController', function userDataController($scope) {
        $scope.myEntities = workItem.userDefinedData;

        $scope.render = function() {
            $scope.myInputs = userDefinedModel[workItem.userDefinedData.templateVersion];
        };

        $scope.render();

        $scope.submitTasks = function () {
            workItem.pastEvents.push({
                "actor": {
                    "system": "WarehouseMaster",
                    "user": "Fernando"
                },
                "action": "Edit",
                "oldStatus": "Draft",
                "newStatus": "Draft",
                "timestamp": new Date()
            });
        };
    });

    app.controller('WorkItemController', function workItemController() {
        this.data = workItem;
    });

    var userDefinedModel = {
        "1": [{
            "attribute": "Confirm customer address",
            "values": ["In Progress", "Complete", "Not Applicable"],
            "type": "radio"
        }],
        "2": [
            {
                "attribute": "Confirm customer address",
                "values": ["In Progress", "Complete", "Not Applicable"],
                "type": "radio"
            },
            {
                "attribute": "Payment method",
                "values": ["Credit card", "Cash"],
                "type": "checkbox",
                "group": true
            },
            {
                "attribute": "Additional comment",
                "type": "text"
            },
            {
                "attribute": "Approved",
                "type": "checkbox",
                "group": false
            },
            {
                "attribute": "Take action",
                "inputs": [
                    {
                        "attribute": "Status",
                        "values": ["In Progress", "Complete", "Not Applicable"],
                        "type": "radio"
                    },
                    {
                        "attribute": "Reason",
                        "type": "text"
                    },
                    {
                        "attribute": "Customer rating",
                        "values": ["A", "B", "C", "D", "E"],
                        "type": "checkbox",
                        "group": true
                    }, {
                        "attribute": "Customer replied",
                        "type": "checkbox",
                        "group": false
                    }
                ]
            },
            {
                "attribute": "Take another action",
                "inputs": [
                    {
                        "attribute": "Status",
                        "values": ["In Progress", "Complete", "Not Applicable"],
                        "type": "radio"
                    },
                    {
                        "attribute": "Reason",
                        "type": "text"
                    }
                ]
            }
        ]

    };


    var workItem = {
        "id": "123",
        "workflowData": {
            "workflow": {
                "name": "ORDER_MANAGEMENT",
                "version": "1"
            },
            "status": "Draft"
        },
        "businessData": {
            "customerId": "654",
            "customerName": "ACME Inc.",
            "order": {
                "id": "654-1",
                "items": [
                    {
                        "seqNo": "1",
                        "id": "987654",
                        "name": "Bananas",
                        "quantity": "9",
                        "unit": "piece",
                        "unitPrice": "3.6",
                        "total": "32.4"
                    },
                    {
                        "seqNo": "2",
                        "id": "321654",
                        "name": "Oranges",
                        "quantity": ".5",
                        "unit": "kilogram",
                        "unitPrice": "12",
                        "total": "6"
                    }
                ],
                "total": "38.4"
            }
        },
        "userDefinedData": {
            "templateVersion": 2,
            "Payment method": {"Cash": true},
            "Additional comment": "some previously submitted value"
        },
        "pastEvents": [
            {
                "actor": {
                    "system": "Sales",
                    "user": "Ivan"
                },
                "action": "Create",
                "newStatus": "Draft",
                "timestamp": "2015-02-07T12:00:05"
            },
            {
                "actor": {
                    "system": "WarehouseMaster",
                    "user": "Piotr"
                },
                "action": "Edit",
                "oldStatus": "Draft",
                "newStatus": "Draft",
                "timestamp": "2015-02-08T12:00:05"
            }
        ]
    };

})();
