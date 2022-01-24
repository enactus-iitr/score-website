import { makeStyles } from "@material-ui/core";
import { colors } from "../../styles/colors";

const useStyles = makeStyles({
  mainbox: {
    // X: '241px',
    // Y: '309px',
    width: "70%",
    // height: '',
    borderRadius: "20px",
    padding: "8%",
    paddingTop: "3%",
    backgroundColor: colors.blue,
    color: "white",
    marginLeft: "15%",
    position: "absolute",
  },

  heading: {
    fontSize: "72px",
  },

  para: {
    marginTop: "10px",
    fontSize: "24px",
  },

  yellowbar: {
    width: "10%",
    height: "400px",
    backgroundColor: colors.yellow,
    transform: "translate(-640px,-200px)",
    position: "relative",
  },

  subjects: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
  },

  subject: {
    backgroundColor: colors.lightblue,
    width: "9rem",
    height: "9rem",
    paddingTop: "1.2rem",
    borderRadius: "1rem",
    // paddingLeft:'1.7rem',
    marginRight: "1rem",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "0.2rem",
  },
});

export default useStyles;
