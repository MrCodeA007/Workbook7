`use strict`;

let citiesArray = [
  {
    name: "Boston, MA",
    latitude: 42.35927885787288,
    longitude: -71.04914826040518,
  },

  {
    name: "Albuquerque, New Mexico",
    latitude: 35.09830627370584,
    longitude: -106.61662803108403,
  },

  {
    name: "Tulsa, Oklahoma",
    latitude: 36.18317462863882,
    longitude: -96.00247863453073,
  },
];
//------------------------------------------------------------------
const searchSelectorEl = document.getElementById(`searchSelector`);
console.log(searchSelectorEl);

function dropdownSelector() {
  for (i = 0; i < citiesArray.length; i++) {
    let optionEl = document.createElement("option");
    const city = citiesArray[i];
    optionEl.textContent = city.name;
    searchSelectorEl.appendChild(optionEl);
  }
}
//---------------------------------------------------

searchSelectorEl.addEventListener("change", () => {
  let selectedValue = searchSelectorEl.value;
  console.log(selectedValue);

  const selectedCity = citiesArray.find((city) => city.name === selectedValue);
  const latitudeInput = selectedCity.latitude;
  const longitudeInput = selectedCity.longitude;
  const url = `https://api.weather.gov/points/${latitudeInput},${longitudeInput}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.properties.forecast);
      fetch(data.properties.forecast)
        .then((response) => response.json())
        .then((forecast) => {
          console.log(forecast.properties.periods)
        })
    });
});

dropdownSelector();
