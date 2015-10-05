 function meanController($scope, $resource, $mdDialog, customUtilFactory, httpSevice, $q, $http) {

     $scope.loggedin=false;
     $scope.login = {};
     var RestApi = $resource('/api');
     $scope.name = "Ramana Test";

     //REST API calls


     //RestApi.query(function(result) {
     //  customUtilFactory.print(result);
     //})

     /*
     var call1 = $http.get("/json/test1.json"),
         call2 = $http.get("/json/test2.json");

     var deferred = $q.defer();

     var completeAllAsyncCalls = $q.all([call1, call2]).then(function(result) {
         var tmp = [];
         angular.forEach(result, function(response) {
             tmp.push(response.data); // here 'data' is key in json 
             console.log("indivisual call result")
             console.log(response.data)
         }, function(err) {
             console.log("error");
             deferred.reject("error here ");
         });

         deferred.resolve(tmp)
         return deferred.promise;

     });

     completeAllAsyncCalls.then(function(tmpResult) {
         console.log(" ###### After cpompletion of all Async calls")
         console.log(tmpResult)
     }, function(msg) {
         console.log(msg);

     });*/

     /* var promise = httpSevice.findData("/api/findData/rqq");
     promise.success(function(resp) {
         customUtilFactory.print(resp);
         customUtilFactory.showAlert(resp[0].email);

     });
     promise.error(function(resp) {
         customUtilFactory.print(resp);
         customUtilFactory.showAlert("error");

     })*/
       var promise = httpSevice.getData("/api/getData");
     promise.success(function(resp) {
         customUtilFactory.print(resp);
         $scope.records=resp;
         $scope.testname="Ramana Vukoti"
       //  customUtilFactory.showAlert(resp.statusMsg);

     });
     promise.error(function(resp) {
         customUtilFactory.print(resp.respData);
         customUtilFactory.showAlert(resp.statusMsg);

     })

     /* var promise = httpSevice.deleteData("/api/deleteData/ssss");
     promise.success(function(resp) {
         customUtilFactory.print(resp);
         customUtilFactory.showAlert(resp.n +" is deleted ");

     });
     promise.error(function(resp) {
         customUtilFactory.print(resp);
         customUtilFactory.showAlert("error");

     })
     */

     $scope.registration = function() {

         var promise = httpSevice.postData("/api/postData", $scope.reg);
         promise.success(function(resp) {
             customUtilFactory.print(resp);
             customUtilFactory.showAlert(resp.statusMsg);

         });
         promise.error(function(resp) {
             customUtilFactory.print(resp);
             customUtilFactory.showAlert(resp.statusMsg);

         })

         /* var restApiInst = new RestApi();
         restApiInst.data = $scope.login*/
         /* restApiInst.$save(function(resp) {
             customUtilFactory.print(resp);
             customUtilFactory.showAlert(resp.statusMsg);

         });*/


     }

     $scope.logout=function(){
         $scope.loggedin=false;
          $scope.loggedInUser=null;
     
     }
     $scope.loginFunction=function() {
         
         
         var promise = httpSevice.findData("/api/findData/",$scope.login);
         promise.success(function(resp) {
             console.log(resp);
             if(resp.length==1){
              customUtilFactory.showAlert(resp[0].name+" -- Logged in successfully");
                 $scope.loggedInUser=resp[0].name;
                 
                 console.log(resp[0].name +" name is ")
                 
                 $scope.loggedin=true;
                
             }
         });
         promise.error(function(err) {

         })
          
     }
 }