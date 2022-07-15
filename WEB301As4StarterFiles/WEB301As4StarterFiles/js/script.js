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

//display message that form submitted successfully
$('#submit').on('click',function(){
localStorage.setItem('lastname','Master');
localStorage.lastname='Master';
localStorage.setItem('firstname','Ajima');
localStorage.firstname='Ajima';
localStorage.setItem('lattitude','56.1304 N');
localStorage.latitude='56.1304 N';
localStorage.setItem('longitude','56.1304 N');
localStorage.latitude='56.1304 N';
$('#succsess').text("<h1>Value has been submitted successfully</h1>");



});

