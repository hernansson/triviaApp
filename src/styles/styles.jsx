import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  congratz: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    rowGap: "15px",
    "@media only screen and (min-width: 768px)": {
      marginTop: "5%",
    },
  },
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    rowGap: "15px",
    marginTop: "5%",
  },
  leaderBoard: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "15%",
    paddingBottom: "10%",
    "@media only screen and (min-width: 768px)": {
      paddingTop: "8%",
    },
  },
  tableContainer: {
    width: "80%",
    "@media only screen and (min-width: 768px)": {
      width: "20%",
    },
  },
  table: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  congratzText: {
    fontSize: "40px",
  },
  assertsText: {
    fontSize: "30px",
  },
  triviaImage: {
    width: "200px",
  },
  congratzImg: {
    height: "20vw",
  },
}));
