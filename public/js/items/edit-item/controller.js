app.controller('ItemEditCtrl',function($scope,ItemService,$stateParams,$state){


    ItemService.getItem($stateParams.itemId).then(function(response){
        $scope.item = response.data;
    })

	$scope.save = function(){
        ItemService.updateItem($scope.item).then(function(response){
            if(response.data){
                alert("Success");
                $state.go('item',{itemId:$scope.item._id})

            }else{
                alert("Failed");
            }
        })
    }

    $scope.addVolume = function(volume){
        newVolume = {
            qty : 0,
            unit : ""
        }

        volume.push(newVolume);
    }
    $scope.deleteVolume = function(index,volume){
        volume.splice(index,1)
    }

	$scope.addPrice = function(prices){
        newPrice = {
            unit : "",
            nominal : 0
        };
        prices.push(newPrice);
    }
    
    $scope.deletePrice = function(index,prices){
        prices.splice(index,1)
    }
});