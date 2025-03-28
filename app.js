let intervalId;

function updateTime() {
  // Los Angeles
  let losAngeles = document.querySelector("#los-angeles");
  if (losAngeles) {
    let losAngelesDate = losAngeles.querySelector(".date");
    let losAngelesTime = losAngeles.querySelector(".time");
    let losAngelesTimezone = moment().tz("America/Los_Angeles");
    losAngelesDate.innerHTML = losAngelesTimezone.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = losAngelesTimezone.format("h:mm:ss");
  }

  // Paris
  let paris = document.querySelector("#paris");
  if (paris) {
    let parisDate = paris.querySelector(".date");
    let parisTime = paris.querySelector(".time");
    let parisTimezone = moment().tz("Europe/Paris");
    parisDate.innerHTML = parisTimezone.format("MMMM Do YYYY");
    parisTime.innerHTML = parisTimezone.format("h:mm:ss");
  }

  // Montreal
  let montreal = document.querySelector("#montreal");
  if (montreal) {
    let montrealDate = montreal.querySelector(".date");
    let montrealTime = montreal.querySelector(".time");
    let montrealTimezone = moment().tz("America/Montreal");
    montrealDate.innerHTML = montrealTimezone.format("MMMM Do YYYY");
    montrealTime.innerHTML = montrealTimezone.format("h:mm:ss");
  }
}

updateTime();
setInterval(updateTime, 1000);

// Update the UI with city timezone when selecting a new city
function updateCity(event) {
  clearInterval(intervalId);

  let cityTimezone = event.target.value;
  if (cityTimezone === "current-location") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#city");

  function updateSelectedCityTime() {
    let cityTime = moment().tz(cityTimezone);
    citiesElement.innerHTML = `
  <div class="city">
  <div>
  <h2>${cityName}</h2>
  <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")}</div>
  </div>
  <a href="/">Back to homepage</a>
  `;
  }
  updateSelectedCityTime();
  intervalId = setInterval(updateSelectedCityTime, 1000);
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
