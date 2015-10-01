 function meanController($scope, $resource, $mdDialog, customUtilFactory) {


     $scope.login = {};
     var RestApi = $resource('/api');
     $scope.name = "Ramana Test";

     //REST API calls


     //RestApi.query(function(result) {
       //  customUtilFactory.print(result);
     //})



     $scope.loginFunc = function() {
         var restApiInst = new RestApi();
         restApiInst.data = $scope.login
         restApiInst.$save(function(resp) {
             customUtilFactory.print(resp);
             customUtilFactory.showAlert(resp.statusMsg);

         });



     }



 }