import React from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Typography } from "@material-ui/core";
import Movie from "../Movie/Movie";
import Loader from "../Loader/Loader";

const Movies = ({ history }) => {
  const { movies, loading } = useSelector((state) => state.movie);

  return (
    <Container maxWidth="lg" style={{ marginTop: "50px" }}>
      {loading ? (
        <Loader />
      ) : movies.length > 0 ? (
        <Grid container spacing={4}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} spacing={3}>
              <Movie history={history} movie={movie} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h5" align="center" color="error" gutterBottom>
          No movies to show
        </Typography>
      )}
    </Container>
  );
};

export default Movies;
