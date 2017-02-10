import fetch from "node-fetch";
import assert from "assert";

function getCreatures(fetch, id) {
  return fetch('http://swapi.co/api/people/' + id)
    .then(response => response.json())
    .then(profile => [profile.name, profile.mass])
    .catch(err => console.log(err));
}

//example

getCreatures(fetch, 23)
  .then(hero => console.log('The name of hero is: ' + hero[0] + '\nThe mass is:' + hero[1]))
  .catch(err => console.log(err));

//test

describe('getCreatures', () => {
    it('calls Fetch with the correct url', () => {
      const fakeFetch = url => {
        assert(url ===
          'http://swapi.co/api/people/23');
        return new Promise(function(resolve){

        });
      };
      getCreatures(fakeFetch, 23);
    });

});
