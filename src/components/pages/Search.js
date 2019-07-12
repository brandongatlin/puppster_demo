import React, { useState } from "react";
import API from "../../utils/API";

function Search() {
  const [breed, setBreed] = useState("");
  const [allPups, setAllPups] = useState([]);

  const searchPup = e => {
    e.preventDefault();
    API.search(breed)
      .then(function(pups) {
        setAllPups(pups.data.message);
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Search By Breed!</h1>
      <input
        type='text'
        value={breed}
        onChange={e => setBreed(e.target.value)}
      />
      <br />
      <input value='Search' type='submit' onClick={e => searchPup(e)} />
      <br />
      {allPups.map((pup, idx) => {
        return <img alt='doggo' src={pup} key={idx} />;
      })}
    </div>
  );
}

export default Search;
