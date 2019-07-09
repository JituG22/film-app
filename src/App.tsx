import React, { useEffect, useState, useCallback } from "react";
import useStoreon from "storeon/react";
import FilmView from "./components/FilmView";

import "./style.scss";

interface IProps {}

const App: React.FC<IProps> = props => {
  const { dispatch, film } = useStoreon("film");
  const [query, setQuery] = useState("");

  const handleClick = useCallback(
    e => {
      e.preventDefault();
      dispatch("film/search", query);
    },
    [query]
  );

  return (
    <div className="wrap">
      Search film:
      <form onSubmit={handleClick}>
        <div className="container">
          <input
            className="input-material"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="btn" onClick={handleClick}>
            Search
          </button>
        </div>
      </form>
      <FilmView />
    </div>
  );
};

export default App;
