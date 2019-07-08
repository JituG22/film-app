import React, { useEffect, useState, useCallback } from "react";
import useStoreon from "storeon/react";
import FilmView from "./components/FilmView";

interface IProps {}

const App: React.FC<IProps> = props => {
  const { dispatch, film } = useStoreon("film");
  const [query, setQuery] = useState("");

  const handleClick = useCallback(() => {
    dispatch("film/search", query);
  }, [query]);

  return (
    <div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleClick}>Search</button>
      <FilmView />
    </div>
  );
};

export default App;
