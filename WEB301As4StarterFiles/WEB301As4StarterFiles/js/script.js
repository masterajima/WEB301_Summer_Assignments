/*
  Your name here
*/
add a click event handler for the first button
$('document').ready(function(){
  $('#position').on('click',getLocation)
function getLocation(){
    //check geo location is available in browser or not
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      } else {
      document.getElementById("longitude").innerHTML = "Geolocation is ";
      }
     }
     function showPosition(position) {
      navigator.geolocation.getCurrentPosition(showPosition);
      document.getElementById("latitude").innerHTML = "Latitude: " +
     position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
     }
    
  });
