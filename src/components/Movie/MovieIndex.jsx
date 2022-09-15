import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import MovieCreate from "./MovieCreate";
import MovieTable from "./MovieTable";
import MovieEdit from "./MovieEdit";
import { Endpoints } from "../Endpoints";

function MovieIndex(props) {
  const [movies, setMovies] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [movieToUpdate, setMovieToUpdate] = useState({});

  const editUpdateMovie = (movie) => {
    setMovieToUpdate(movie);
    console.log(movie);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  const fetchMovies = async () => {
    // TODO fetch all the movies
    console.log("getall movies");
    try {
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="3">
          <MovieCreate fetchMovies={fetchMovies} token={props.token} />
        </Col>
        <Col md="9">
          <MovieTable
            movies={movies}
            fetchMovies={fetchMovies}
            token={props.token}
            editUpdateMovie={editUpdateMovie}
            updateOn={updateOn}
          />
        </Col>
        {updateActive ? (
          <MovieEdit
            movieToUpdate={movieToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchMovies={fetchMovies}
          />
        ) : null}
      </Row>
    </Container>
  );
}

export default MovieIndex;
