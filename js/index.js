



function myMap() {
	var location = { lat: 33.2334, lng: 23.234 };

	var map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 5,
	  center: location,
	  mapTypeId: google.maps.MapTypeId.HYBRID,
	});

	var marker = new google.maps.Marker({ position: location });


  map.addListener('click', function(event) {
    var latitude = event.latLng.lat();
    var longitude = event.latLng.lng();
	// for(let x in data){
	// 	result_container.innerHTML+= x.cause + "<br>";
	// }
    console.log(latitude, longitude);
	marker.setPosition({lat:latitude,lng:longitude});
  });
  marker.setMap(map);

  }
  