import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  favouriteIcon: {
    position: "absolute",
    right: 2,
    top: 2,
    cursor: "pointer",
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 1,
  },
  rate: {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "8px",
    background: "#f1f1f1",
    borderRadius: "3px",
    marginLeft: "10px",
    width: "43px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  cardMedia: {
    paddingTop: "150%",
  },
  cardContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  cardActions: {
    marginTop: "auto",
    padding: 0,
    textAlign: "center",
  },
  seemore: {
    marginTop: "15px",
    width: "100%",
  },
}));

export default useStyles;
