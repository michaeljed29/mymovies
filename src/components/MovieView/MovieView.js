import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Loader from "../Loader/Loader";
import IconButton from "@material-ui/core/IconButton";
import { addRemoveToFavourites } from "../../actions/movieActions";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const MovieView = ({ history }) => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { favouriteMovies } = useSelector((state) => state.movie);

  const classes = useStyles();
  const { title, overview, poster_path, vote_average } = movie;
  useEffect(async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setMovie(res.data);
    setLoading(false);
  }, []);

  const isFavourite = favouriteMovies.some(
    (movie) => movie.id.toString() === id
  );

  const onAddRemoveToFavourites = () => {
    dispatch(addRemoveToFavourites(movie));
  };

  console.log("isFavourite", isFavourite);

  console.log("favouriteMovies", favouriteMovies);
  return (
    <section style={{ padding: "80px 0" }}>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Grid container spacing={4}>
            <Grid item md={4}>
              <img
                className={classes.img}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              />
            </Grid>
            <Grid className={classes.details} item md={8}>
              <div className={classes.titleWrapper}>
                <Typography variant="h3">{title}</Typography>
                <div className={classes.rate}>{vote_average}</div>
              </div>

              <Typography variant="h5" paragraph color="textSecondary">
                {overview}
              </Typography>
              <div className={classes.actions}>
                <Button
                  variant=""
                  startIcon={<ArrowBackIcon />}
                  onClick={() => history.push("/")}
                >
                  Back
                </Button>
                <IconButton
                  className={classes.favouriteIcon}
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={onAddRemoveToFavourites}
                >
                  {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </div>
            </Grid>
          </Grid>
        )}
      </Container>
    </section>
  );
};

export default MovieView;
