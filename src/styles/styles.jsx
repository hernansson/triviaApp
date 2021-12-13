import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  congratz: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    rowGap: "15px",
  },
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    rowGap: "15px",
    marginTop: "5%",
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
