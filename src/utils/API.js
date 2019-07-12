import axios from "axios";
const BASEURL = "https://dog.ceo/api/";

export default {
  discover: function() {
    return axios.get(BASEURL + "breeds/image/random");
  },

  search: function(query) {
    return axios.get(BASEURL + "breed/" + query + "/images");
  }
};
