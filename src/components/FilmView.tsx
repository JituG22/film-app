import React, { FC } from "react";
import useStoreon from "storeon/react";

interface IProps {}

const FilmView: FC<IProps> = props => {
  const { film } = useStoreon("film");
  return (
    <>
      {Object.keys(film).length > 0 ? (
        <div>
          <h2> {film.Title}</h2>
          <img src={film.Poster} alt="Poster" />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FilmView;
