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

function showError(error) {
    if(error.code==PERMISSION_DENIED) {
    
        document.getElementById('#error').innerHTML = "User denied the request for Geolocation."
        
    }
    else if(navigator.geolocation==true){
     
      //if user give permission show current position
      showPosition();
      //add latitude value to input tag
      
      let lattitude=$('#latitude').val;
      $('#latitude').append(lattitude);
      //

      let longitude=$('#longitude').val;
      $('#longitude').append(longitude);
    }
     
    
}
