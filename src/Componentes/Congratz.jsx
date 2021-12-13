import React from "react";
import { useContext } from "react";
import { TriviaContext } from "../context/triviaContext";
import { congratzImg } from "../Env/config";
import estilos from "../styles/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function Congratz() {
  const { setAsserts, asserts, userName } = useContext(TriviaContext);
  const classes = estilos();
  const handleClick = () => {
    setAsserts(0);
  };
  return (
    <div className={classes.congratz}>
      <h5 className={classes.congratzText}>{`Felicitaciones ${userName}!`}</h5>
      <img
        src={congratzImg}
        alt="Congratulations"
        className={classes.congratzImg}
      />
      <p
        className={classes.assertsText}
      >{`Acertaste ${asserts} preguntas :D`}</p>
      <Link to="/trivia">
        <Button onClick={handleClick} variant="contained" color="primary">
          Jugar de nuevo ?
        </Button>
      </Link>
    </div>
  );
}
