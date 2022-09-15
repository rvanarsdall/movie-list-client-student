import React from "react";
import { Table, Button } from "reactstrap";

const MovieTable = (props) => {
  const deleteMovie = async (movie) => {
    console.log("delete button clicked");
    // TODO run fetch to delete and use the movie._id
    // TODO after successful delete run the props.fetchMovies()
  };

  const movieMapper = () => {
    return props.movies.map(function (movie, index) {
      return (
        <tr key={index}>
          <th scope="row">{index}</th>
          <td>{movie.movieTitle}</td>
          <td>{movie.movieYear}</td>
          <td>{movie.rating}</td>
          <td>
            <Button
              color="warning"
              onClick={() => {
                props.editUpdateMovie(movie);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              color="danger"
              onClick={() => {
                deleteMovie(movie);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h3>Movie History</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Movie Year</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{movieMapper()}</tbody>
      </Table>
    </>
  );
};

export default MovieTable;
