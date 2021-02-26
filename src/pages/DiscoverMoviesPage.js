import axios from "axios";
import { useState } from "react";
import MovieItem from "../components/MovieItem";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [state, setState] = useState({ status: "idle" });

  const search = async () => {
    if (searchText === "") {
      setState({ status: "idle" });
      return;
    }
    setState({ status: "searching" });

    // console.log("Start searching for:", searchText);

    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    const data = await axios.get(
      `https://omdbapi.com/?apikey=27bbdb12&s=${queryParam}`
    );

    setState({ status: "done", data: data.data.Search });
    console.log("Success!", data);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {state.status === "idle" && (
        <p>type in a search term and click "search" to start...</p>
      )}
      {state.status === "searching" && <p>Searching...</p>}
      {state.status === "done" && (
        <div>
          <h2>Search results</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "0 -10px",
            }}
          >
            {state.data.map((movie) => (
              <MovieItem key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
