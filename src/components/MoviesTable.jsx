import React from "react";
import Like from "./Like";
import { Link } from "react-router-dom";

const MoviesTable = (props) => {
  const { movies, onDelete, onSort } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("Title")}>Title</th>
          <th onClick={() => onSort("Genre")}>Genre</th>
          <th onClick={() => onSort("Rate")}>Rate</th>
          <th onClick={() => onSort("Stock")}>Stock</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>
              <Link to={`/movies/${movie._id}`}>{movie.Title}</Link>
            </td>
            {/* <td><Link>{movie.Title}</Link></td> */}
            <td>{movie.Genre}</td>
            <td>{movie.Stock}</td>
            <td>{movie.Rate}</td>
            <td>
              <Like onLike={() => props.onLike(movie)} liked={movie.liked} />
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => onDelete(movie._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
