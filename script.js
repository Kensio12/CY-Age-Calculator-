// Get the current date
var currentDate = new Date();

// Format the date as YYYY-MM-DD
var formattedDate = currentDate.toISOString().slice(0,10);

// Set the value of the input field
document.getElementById("currentDate").value = formattedDate;
function calculateAge() {
  var birthdate = new Date(document.getElementById("birthdate").value);
  var now = new Date();
  var difference = now - birthdate;

  var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  difference -= years * (1000 * 60 * 60 * 24 * 365);
  var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.4375));
  difference -= months * (1000 * 60 * 60 * 24 * 30.4375);
  var weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
  difference -= weeks * (1000 * 60 * 60 * 24 * 7);
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  difference -= days * (1000 * 60 * 60 * 24);
  var hours = Math.floor(difference / (1000 * 60 * 60));
  difference -= hours * (1000 * 60 * 60);
  var minutes = Math.floor(difference / (1000 * 60));
  difference -= minutes * (1000 * 60);
  var seconds = Math.floor(difference / 1000);

  var resultHTML = "<ul>";
  resultHTML += "<li>Your age is: " + years + " years</li>";
  resultHTML += "<li>" + months + " months</li>";
  resultHTML += "<li>" + weeks + " weeks</li>";
  resultHTML += "<li>" + days + " days</li>";
  resultHTML += "<li>" + hours + " hours</li>";
  resultHTML += "<li>" + minutes + " minutes</li>";
  resultHTML += "<li>" + seconds + " seconds</li>";
  resultHTML += "</ul>";

  document.getElementById("result").innerHTML = resultHTML;
}