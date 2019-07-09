import React, { FC } from "react";
import useStoreon from "storeon/react";

import "./style.scss";

interface IProps {}

const FilmView: FC<IProps> = props => {
  const { film } = useStoreon("film");
  return (
    <>
      {Object.keys(film).length > 0 ? (
        <div className="wrap-film">
          <h2> {film.Title}</h2>
          <img src={film.Poster} alt="Poster" />

          <div className="info">
            <h3>Actors</h3> {film.Actors}
            <h3>Genre</h3> {film.Genre}
            <h3>Awards</h3> {film.Awards}
            <h3>Country </h3>
            {film.Country}
            <h3>Rating </h3>
            {film.imdbRating}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FilmView;
