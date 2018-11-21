(function ($) {
    "use strict";

    $(window).on('load', function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 29.719020, 
                lng: -95.479050
            },
            zoom: 17,
            scrollwheel: false,
            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e9e9e9"
                    }, {
                    "lightness": 17
                    }]
                }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                    }, {
                    "lightness": 20
                    }]
                }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                    }, {
                    "lightness": 17
                    }]
                }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#ffffff"
                    }, {
                    "lightness": 29
                    }, {
                    "weight": 0.2
                    }]
                }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                    }, {
                    "lightness": 18
                    }]
                }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                    }, {
                    "lightness": 18
                    }]
                }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                    }, {
                    "lightness": 21
                    }]
                }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#d5d5d5"
                    }, {
                    "lightness": 21
                    }]
                }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                    }, {
                    "color": "#f8f8f8"
                    }, {
                    "lightness": 25
                    }]
                }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                    }, {
                    "color": "#222222"
                    }, {
                    "lightness": 30
                    }]
                }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                    }]
                }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                    }, {
                    "lightness": 19
                    }]
                }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fefefe"
                    }, {
                    "lightness": 10
                    }]
                }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#fefefe"
                    }, {
                    "lightness": 17
                    }, {
                    "weight": 1.2
                    }]
                }]
        });
        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(29.717802, -95.478537),
            map: map,
            icon: {
                url: '../assets/images/map-marker.png',
            },
            animation: google.maps.Animation.BOUNCE
        });
    });

}(jQuery));
