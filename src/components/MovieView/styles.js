import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
  },
  loader: {
    margin: "auto",
    display: "block",
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  favouriteIcon: {
    fontSize: "30px",
  },
  rate: {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "8px",
    background: "#f1f1f1",
    borderRadius: "3px",
    marginLeft: "15px",
    width: "43px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default useStyles;
