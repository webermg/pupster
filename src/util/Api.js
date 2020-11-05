import axios from "axios";

const BASEURL = "https://dog.ceo/api/";
const RANDOM = "breeds/image/random";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getRandom: function() {
    return axios.get(BASEURL + RANDOM);
  },
  getBreed: function(breed) {
    const query = BASEURL + `breed/${breed}/images`
    return axios.get(BASEURL + query);
  }
};