title: The Location
date: 2014-10-07 22:34:08
---
## How to find MCSM

The MSCM is located at Sirius Business Park (form. Siemenswerke) at Rupert-Mayer-Str. 44.  You can get there either with U3, station &quot;Obersendling&quot;, or S3, station &quot;Siemenswerke&quot;. It is a 5-10 minutes walk to the main entrance.

<div id="map-canvas"></div>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>


## Finding Geb. 6415, Raum 169

Consult the following map to find Makerspace rooms:

<img src="/images/mcsm_anfahrt.png" />

Once you are witin the Sirius Business Park and look for building 6415. Enter the building, and go to the basement and follow the signs of &quot;Modellbauclub der Siemens Mitarbeiter M&uuml;nchen&quot;

Additional information how to get there are on the old [MCSM website](http://home.arcor.de/mcsm-muenchen/main/mainadresse.htm)


## Address

Modellbauclub der Siemens Mitarbeiter M&uuml;nchen e.V.
Sirius Business Park
Ruppert Mayer-Str.44
81379 M&uuml;nchen
Geb&auml;ude 6415, Raum 169

<script>

function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(48.095, 11.533),
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    zoomControl: true,
    streetViewControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    }
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var myLatlng = new google.maps.LatLng(48.0959845,11.5353281)

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'MCSM'
  });

}

google.maps.event.addDomListener(window, 'load', initialize);

</script>
