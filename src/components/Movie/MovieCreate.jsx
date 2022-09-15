// imports
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// a function
const MovieCreate = (props) => {
  let [movieTitle, setMovieTitle] = useState("");
  let [movieYear, setMovieYear] = useState("");
  let [rating, setRating] = useState("1");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO ADD MOVIE CREATE FETCH
  };

  return (
    <>
      <h3>Log a Movie</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="movieTitle">Movie Title</Label>
          <Input
            onChange={(e) => {
              setMovieTitle(e.target.value);
            }}
            name="movieTitle"
            value={movieTitle}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="rating">Rating</Label>
          <Input
            type="select"
            onChange={(e) => {
              setRating(e.target.value);
            }}
            name="rating"
            value={rating}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="movieYear">Movie Year</Label>
          <Input
            name="movieYear"
            onChange={(e) => {
              setMovieYear(e.target.value);
            }}
            value={movieYear}
          />
        </FormGroup>
        <Button type="submit">Click to Submit</Button>
      </Form>
    </>
  );
};

// export
export default MovieCreate;
