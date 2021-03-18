import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Typography, Container, Button, Grid } from "@material-ui/core";
import {
  filterByFavourites,
  setMovies,
  setLoading,
  setPage,
  setTotalPage,
} from "../../actions/movieActions";
import Movies from "../Movies/Movies";
import Pagination from "@material-ui/lab/Pagination";
import useStyles from "../../styles";

const Home = ({ history }) => {
  const {
    isFilteredByFavourite,
    currentPage,
    favouriteMovies,
    searchKey,
    totalPages,
    loading,
  } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const onFilter = () => dispatch(filterByFavourites());
  const classes = useStyles();

  console.log("currentPage", currentPage);

  useEffect(async () => {
    if (isFilteredByFavourite) {
      dispatch(setMovies(favouriteMovies));
      return;
    }

    dispatch(setLoading(true));

    if (searchKey) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchKey}&page=${currentPage}`
      );
      dispatch(setMovies(res.data.results));
      dispatch(setTotalPage(res.data.total_pages));
      return;
    }

    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`
    );
    dispatch(setMovies(res.data.results));
    dispatch(setTotalPage(res.data.total_pages));
    console.log("res", res.data);
  }, [isFilteredByFavourite, searchKey, currentPage]);

  useEffect(async () => {
    if (isFilteredByFavourite) {
      dispatch(setMovies(favouriteMovies));
      return;
    }
  }, [favouriteMovies]);

  console.log("searchKey", searchKey);

  const onPaginate = (e, page) => {
    dispatch(setPage(page));
  };

  return (
    <section style={{ padding: "80px 0" }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          My Movies
        </Typography>
        <Typography
          className={classes.description}
          // variant="h5"
          align="center"
          color="textSecondary"
          paragraph
          gutterBottom
        >
          Welcome to myMovies, where you can search your favourite movies and
          add it to your favourite list movies.
        </Typography>
        <Grid container alignItems="center" style={{ marginTop: 30 }}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Button
              variant={isFilteredByFavourite ? "contained" : "outlined"}
              color="primary"
              className={classes.filterButton}
              endIcon={<FavoriteIcon />}
              onClick={onFilter}
            >
              Filtered by favourites
            </Button>
          </Grid>
          <Grid container item xs={12} sm={6} md={6} lg={6} justify="flex-end">
            {!isFilteredByFavourite && (
              <Pagination
                size="small"
                boundaryCount={2}
                count={totalPages}
                page={currentPage}
                onChange={onPaginate}
                color="primary"
              />
            )}
          </Grid>
        </Grid>
      </Container>
      {/* <Container>

      </Container> */}

      <Movies history={history} />
    </section>
  );
};

export default Home;
