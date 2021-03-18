import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { addRemoveToFavourites } from "../../actions/movieActions";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import useStyles from "./styles";

const Movie = ({ movie, history }) => {
  const classes = useStyles();
  const { title, poster_path, vote_average, id } = movie;
  const { favouriteMovies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const onAddRemoveToFavourites = () => {
    dispatch(addRemoveToFavourites(movie));
  };

  const isFavourite = favouriteMovies.some((movie) => movie.id === id);

  return (
    <Card className={classes.card}>
      <IconButton
        className={classes.favouriteIcon}
        color="primary"
        aria-label="add to shopping cart"
        onClick={onAddRemoveToFavourites}
      >
        {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      {/* <FavoriteIcon className={classes.favouriteIcon} color="primary" /> */}
      <CardMedia
        className={classes.cardMedia}
        image={`https://image.tmdb.org/t/p/w500${poster_path}`}
        title={title}
      />
      <CardContent className={classes.cardContent}>
        <div className={classes.titleWrapper}>
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
          <div className={classes.rate}>{vote_average}</div>
        </div>
        {/* <Typography gutterBottom paragraph color="textSecondary">
          {overview}
        </Typography> */}
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.seemore}
            color="primary"
            onClick={() => history.push(`movie/${id}`)}
          >
            See more
          </Button>
          {/* <Link className={classes.cardActions} to={`movie/${id}`}>
            See more
          </Link> */}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Movie;
