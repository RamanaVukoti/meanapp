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
}