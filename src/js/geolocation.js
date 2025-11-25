
function initMap() {
  const localItajuba = { lat: -22.413718, lng: -45.449843 };

  const map = new google.maps.Map(document.getElementById("mapa-adotai"), {
    zoom: 16, 
    center: localItajuba, 
    mapTypeControl: false, 
  });

  const marker = new google.maps.Marker({
    position: localItajuba,
    map: map,
    title: "Adotai - Nossa Sede em Itajubá",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h6>Sede da Adotai</h6><p>Av. BPS, 1303, Itajubá - MG</p>"
  });

  marker.addListener("click", () => {
    infoWindow.open({
      anchor: marker,
      map,
    });
  });
}