app.controller('ItemsCtrl',function($scope,ItemService){
    ItemService.getItems().then(
        function(response){
            $scope.items = response.data;
        }
    )
})