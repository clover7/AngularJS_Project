  
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);

        function onPositionUpdate(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true";
            $http.get(url)
                .then(function(result) {
                    var address = result.data.results[2].formatted_address;
                    $scope.address = address;
                });
        } 