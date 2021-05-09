var Birthday = "10 June 2021"

function countdown(){
  var BirthdayDate = new Date(Birthday);
  var CurrentDate = new Date();

  var totalSeconds = (BirthdayDate - CurrentDate) / 1000;

  var days = Math.floor(totalSeconds / 3600 / 24);
  var hours = Math.floor(totalSeconds / 3600) % 24;
  var minutes = Math.floor(totalSeconds / 60) % 60;
  var seconds = Math.floor(totalSeconds) % 60;

  $('#days').text(days);
  $('#hours').text(hours);
  $('#minutes').text(minutes);
  $('#seconds').text(seconds);

  console.log(days, hours, minutes, seconds);
}
// Initial Call
countdown();

setInterval(countdown,1000);
