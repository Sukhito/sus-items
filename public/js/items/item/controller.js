app.controller('ItemCtrl',function($scope,ItemService,$stateParams){
    ItemService.getItem($stateParams.itemId).then(function(response){
        $scope.item = response.data;
    });


	ItemService.getDeliveryItem($stateParams.itemId).then(function(response){
		$scope.deliveries = response.data;
	});

    $scope.section = function(prices){
    	if(prices){
        	return prices.split("|");
    	}
    }

	$scope.printCalc = function(calculations){
        var toWrite = "";
        for(var i = 0; i < calculations.length;i++){
            if(calculations[i].nominal < -1){
                toWrite += calculations[i].nominal + " ";
            }else if(calculations[i].nominal < 0){
                toWrite += (calculations[i].nominal * 100) + "%" + " ";
            }else if(calculations[i].nominal < 1){
                toWrite += "+" + (calculations[i].nominal * 100) + "%" + " ";
            }else{
                toWrite += "+" + calculations[i].nominal + " ";
            }
        }

        return toWrite;
    }
});