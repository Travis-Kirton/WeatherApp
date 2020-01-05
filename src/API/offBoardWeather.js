let cityIdArray = [
  2634723, //Gaydon, GB
  2652221, // Coventry, GB
  2643123, //Manchester, GB
  3310247 //Shannon, IE
];

export function weatherAPI() {
  var key = '803105b5fc049541ef541d54b1bd35fb';
  return fetch(
    'https://api.openweathermap.org/data/2.5/forecast/daily?id=' +
      cityIdArray[Math.floor(Math.random() * 4)] +
      '&appid=' +
      key +
      '&cnt=7'
  )
    .then(resp => {
      return resp.json();
    }) // Convert data to json
    .catch(err => {
      // catch any errors
    });
}
