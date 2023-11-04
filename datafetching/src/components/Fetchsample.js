import React, { useState, useEffect } from "react";
function Joke() {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b06ce04011mshcffe570c08d259bp19d9a8jsn072b3491b824",
        "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data[0].joke);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>Joke of the day:</h2>
      {joke && <p>{joke}</p>}
    </div>
  );
}
export default Joke;