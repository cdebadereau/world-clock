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

// Update the UI with city timezone when selecting a new city
function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#city");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}</div>
        </div>
`;
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
