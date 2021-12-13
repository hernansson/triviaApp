import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { TriviaContext } from "../context/triviaContext";
import TextField from "@mui/material/TextField";
import estilos from "../styles/styles";

export default function Home({ title, image }) {
  const { barActive, setBarActive, setUserName } = useContext(TriviaContext);
  setBarActive(false);
  const classes = estilos();
  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div className={classes.home}>
      <h1>{`Bienvenido a ${title}`}</h1>
      <img src={image} className={classes.triviaImage} />
      <TextField
        sx={{ input: { color: "white" }, borderBottom: "1px solid white" }}
        id="standard-basic"
        label="Nombre del jugador"
        variant="standard"
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        onChange={handleChange}
      />
      <Link to="/trivia">
        <Button variant="contained" style={{ width: "200px" }} color="primary">
          Start
        </Button>
      </Link>
      <Link to="/leaderboard">
        <Button
          variant="contained"
          style={{ width: "200px" }}
          color="secondary"
        >
          Ranking
        </Button>
      </Link>
    </div>
  );
}
