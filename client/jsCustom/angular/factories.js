function customUtilFactory($mdDialog,$window) {
    return {
        showAlert: function(data) {
            var alert = $mdDialog.alert({
                title: 'Attention',
                content:data,
                ok: 'Close'
            });
            $mdDialog.show(alert);
        },
        print: function(data) {
            console.log(data);
        },
        browserAlert: function(data) {
            $window.alert(data);
        }

    };
};


 function httpSevice($http,customUtilFactory) {

    return {
        getData: function(url) {
            customUtilFactory.print("get data -- at clinet side")
            return $http.get(url);
        },
        postData: function(url,data) {
            customUtilFactory.print("postData -- at clinet side")
            return $http.post(url, data);
        },
        deleteData: function(url) {
            customUtilFactory.print("deleteData -- at clinet side")
            return $http.delete(url);
        },
        updateData: function(url,data) {
            customUtilFactory.print("updateData -- at clinet side")
            return $http.post("/api/postDataData", data);
        },
        
        findData: function(url,data) {
            customUtilFactory.print("updateData -- at clinet side")
            
            return $http.put(url,data);
        },


    };

};