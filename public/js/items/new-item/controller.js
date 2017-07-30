app.controller('ItemNewCtrl',function($scope,ItemService,$stateParams,$state){
    $scope.item = {
        name:"",
        dimension:"",
        modal:"",
        ketmodal:"",
        prices:[],
        ketjual:""
    }
    $scope.save = function(){
        ItemService.createItem($scope.item).then(function(response){
            if(response.data){
                alert("Success");
                $state.go('item',{itemId:response.data._id})

            }else{
                alert("Failed");
            }
        })
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