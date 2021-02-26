import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MoviePage() {
  const { imdb_id } = useParams();

  const [movieData, setMovieData] = useState([]);

  console.log("render...");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=27bbdb12&i=${imdb_id}`
      );
      setMovieData(response.data);
      console.log(response.data);
    }
    fetchData();
  }, [imdb_id]);

  return (
    <div>
      {movieData && (
        <h2>
          {movieData.Title}, {movieData.Year}{" "}
          <img
            src={movieData.Poster}
            style={{
              display: "block",
              maxWidth: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </h2>
      )}
    </div>
  );
}
