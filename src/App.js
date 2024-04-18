import Movie from "./Components/Movie";
import Detail from "./Components/Detail";
import { movies } from "./movieDummy";

function App() {
  return (
    <div>
      <div className="app-container">
        {movies.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
      <div className="details">
        {movies.results.map((item) => {
          return (
            <Detail
              title={item.title}
              overview={item.overview}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
