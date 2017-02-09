import fetch from "node-fetch";

function getAnimals(fetch, id) {
  return fetch('http://swapi.co/api/people/' + id)
    .then(response => response.json())
    .then(profile => [profile.name, profile.mass])
    .catch(err => console.log(err));
}

//example

getAnimals(fetch, 2)
  .then(hero => console.log('The name of hero is: ' + hero[0] + '\nThe mass is:' + hero[1]))
  .catch(err => console.log(err));
