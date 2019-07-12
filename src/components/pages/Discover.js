import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function Discover(props) {
  // Declare a new state variable, which we'll call "pup", set initial value to an empty object
  const [pup, setPup] = useState({});

  useEffect(() => {
    API.discover()
      .then(function(puppy) {
        console.log(puppy);
        setPup(puppy.data.message);
      })
      .catch(function(err) {
        console.log(err);
      });
  }, []);
  //https://reactjs.org/docs/hooks-effect.html <= read this to see why this empty array is passed as the second argument ot useEffect. Also, delete it and see what happens in the console.

  const pupLoaded = (
    <div>
      <h1>Random Pup</h1>
      <img alt='rando doggo' src={pup} />
    </div>
  );

  const loading = <h3>loading...</h3>;

  return pup ? pupLoaded : loading;
}

export default Discover;
