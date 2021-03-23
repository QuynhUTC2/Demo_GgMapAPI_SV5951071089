function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  var myLatlng = new google.maps.LatLng(10.83450903579, 106.73102188981234);
  var schLatlng = new google.maps.LatLng(10.845854060340471,106.79454802852483);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLatlng,
  });
  directionsRenderer.setMap(map);

  const onChangeHandler = function () {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  };
  document.getElementById("start").addEventListener("change", onChangeHandler);
  document.getElementById("end").addEventListener("change", onChangeHandler);


  //Hiển thị thông tin
  const infowindow1 = new google.maps.InfoWindow({
    content:
      '<div id="content"><b>Tô Võ Như Quỳnh </b>  <br> ID: 5951071089 <br> Phone number: 0565338946 <br> Job: Sinh Viên </div>',
    position: myLatlng,
  });

  //Hiển thị thông tin
  const infowindow2 = new google.maps.InfoWindow({
    content:
      '<div id="content"><b>Trường đại học giao thông vận tải Phân hiệu TP.HCM</b> <br> 450-451 Lê Văn Việt, Phường Tăng Nhơn Phú A, Quận 9 </div>',
    position: schLatlng,
  });

  // Marker
  const marker = new google.maps.Marker({
    position: myLatlng,
    title: "Nhà Quỳnh",
    map: map,
    icon: "./img/Qcutrrrrrr.jpg",
  });

  const marker1 = new google.maps.Marker({
    position: schLatlng,
    title: "Đại học GTVT Phân hiệu Tp.HCM",
    map: map,
    icon: "./img/utc2cutrrr.jpg",
  });

  

  // Khi click vào Marker thì hiển thị
  google.maps.event.addListener(marker, "click", function () {
    infowindow1.open(map, marker);
  });
  google.maps.event.addListener(marker1, "click", function () {
    infowindow2.open(map, marker1);
  });
}

google.maps.event.addDomListener(window, "load", initMap);
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  directionsService.route(
    {
      origin: {
        query: document.getElementById("start").value,
      },
      destination: {
        query: document.getElementById("end").value,
      },
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}
