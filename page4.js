var map
var infowindow


function createMarker(lat, lon, content) {
  var latLng = new google.maps.LatLng(lat, lon)

 
  var markerImage = new google.maps.MarkerImage('images/mapicon.ico',
                new google.maps.Size(30, 30),
                new google.maps.Point(15, 15),
                new google.maps.Point(30, 30));
    
 var icon = {
     url: "images/mapicon.ico", // url
     scaledSize: new google.maps.Size(35, 35), // size
     origin: new google.maps.Point(0,0), // origin
 };

  var marker = new google.maps.Marker({
    position: latLng,
    icon: icon,
    map: map
  });

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.setContent("<div class='content'>" + content + "</div>");
    infowindow.open(map,marker);
  })

}

function soccerStadiums () {
    createMarker(34.1613, -118.1676, "<h1>rose bowl </h1><img class='mappic' src='images/rosebowl.jpg'>")
    createMarker(33.8644, -118.2611, "<h1>stubhub center </h1> <img class='mappic' src='images/stubhub.jpg'>")
    createMarker(45.5216, -122.6917, "<h1>providence park</h1> <img class='mappic' src='images/providence.jpg'>")
    createMarker(40.7368, -74.1502, "<h1>red bull arena</h1> <img class='mappic' src='images/redbull.jpg'>")
    createMarker(28.5411, -81.3893, "<h1>orlando city stadium</h1> <img class='mappic' src='images/orlando.jpg'>")
    createMarker(49.2768, -123.1120, "<h1>bc place</h1> <img class='mappic' src='images/BcPlace.jpg'>")
    createMarker(38.8898, -76.9719, "<h1>robert f. kennedy memorial stadium</h1> <img class='mappic' src='images/rfk.jpg'>")
    createMarker(37.3511, -121.9246, "<h1>avaya stadium </h1> <img class='mappic' src='images/avaya.png'>" )
    createMarker(47.5952, -122.3316, "<h1>centurylink field</h1> <img class='mappic' src='images/centurylink.jpg'>")
    createMarker(40.5829, -111.8933, "<h1>rio tinto stadium</h1> <img class='mappic' src='images/RioTinto.jpg'>")
    createMarker(45.5623, -73.5530, "<h1>saputo center</h1> <img class='mappic' src='images/saputo.jpg'>")
    createMarker(40.0095, -82.9912, "<h1>mapfre stadium</h1> <img class='mappic' src='images/mapfre.jpg'>")
    createMarker(41.7647, -87.8055, "<h1>toyota park stadium</h1> <img class='mappic' src='images/toyota.jpg'>")
    createMarker(43.6332, -79.4186, "<h1>bmo field</h1><img src='images/BMOfield.jpg'>")
    createMarker(29.7522, -95.3524, "<h1>bbva compass stadium</h1><img src='images/bbva.jpg'>") 
}


function initMap() {
    
    console.log("it is working")

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.1478, lng:  -118.1445},
    zoom: 4
  })

  infowindow = new google.maps.InfoWindow({
    content: "placeholder"
      
  })
soccerStadiums()
}
