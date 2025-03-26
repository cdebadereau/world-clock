function updateTime() {
  // Los Angeles
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");
  let losAngelesTimezone = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesTimezone.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesTimezone.format("h:mm:ss");

  // Paris
  let paris = document.querySelector("#paris");
  let parisDate = paris.querySelector(".date");
  let parisTime = paris.querySelector(".time");
  let parisTimezone = moment().tz("Europe/Paris");
  parisDate.innerHTML = parisTimezone.format("MMMM Do YYYY");
  parisTime.innerHTML = parisTimezone.format("h:mm:ss");

  // Montreal
  let montreal = document.querySelector("#montreal");
  let montrealDate = montreal.querySelector(".date");
  let montrealTime = montreal.querySelector(".time");
  let montrealTimezone = moment().tz("America/Montreal");
  montrealDate.innerHTML = montrealTimezone.format("MMMM Do YYYY");
  montrealTime.innerHTML = montrealTimezone.format("h:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
