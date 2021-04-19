function validate(event) {
  let latitude = document.getElementById("latitude")
  let longitude = document.getElementById("longitude")

  if(!(latitude.value >= -90 && latitude.value <= 90)) {
    document.getElementById("latID").innerText = "* must be a valid Latitude (-90 to 90)"
    event.preventDefault();
    return false;
  }
  if(!(longitude.value >= -180 && longitude.value <= 180)) {
    document.getElementById("longID").innerText = "* must be a valid Longitude (-180 to 180)"
    event.preventDefault();
    return false
  }

  return true;      
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
