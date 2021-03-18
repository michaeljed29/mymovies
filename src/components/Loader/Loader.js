import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loader: {
    margin: "auto",
    display: "block",
  },
}));

const Loader = () => {
  const classes = useStyles();
  return <CircularProgress className={classes.loader} disableShrink />;
};

export default Loader;
