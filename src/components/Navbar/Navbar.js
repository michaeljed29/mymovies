import React, { useState } from "react";
import {
  Typography,
  CssBaseline,
  Container,
  Button,
  AppBar,
  Toolbar,
  InputBase,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import TheatersIcon from "@material-ui/icons/Theaters";
import useStyles from "../../styles";
import { searchMovie } from "../../actions/movieActions";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  // console.log("search", search);
  const onSearch = (e) => {
    // console.log("code", e.charCode);
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchMovie(search));
    setSearch("");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <TheatersIcon
          classes={{
            root: classes.iconLogo,
          }}
        />

        <Typography className={classes.iconLabel} variant="h6" noWrap>
          myMovies
        </Typography>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>

          <form onSubmit={onSubmit}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={onSearch}
              value={search}
            />
          </form>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
