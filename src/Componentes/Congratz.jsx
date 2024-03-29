import React from "react";
import { useContext } from "react";
import { TriviaContext } from "../context/triviaContext";
import { congratzImg } from "../Env/config";
import estilos from "../styles/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function Congratz() {
  const { setAsserts, asserts, userName, setUserName, setBarActive } =
    useContext(TriviaContext);
  setBarActive(true);
  const saveToLocalStorage = () => {
    let leaderBoard = JSON.parse(localStorage.getItem("leaderBoard"));
    if (!userName) {
      setUserName("Anonimo");
    }
    if (leaderBoard) {
      const index = leaderBoard.findIndex((user) => user.userName === userName);
      if (index === -1) {
        leaderBoard.push({ userName, asserts });
      } else {
        if (leaderBoard[index].asserts < asserts) {
          leaderBoard[index].asserts = asserts;
        }
      }
    } else {
      leaderBoard = [{ userName, asserts }];
    }
    localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard));
  };
  saveToLocalStorage();
  const classes = estilos();
  const handleClick = () => {
    setAsserts(0);
    setUserName(null);
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
      <Link to="/trivia" className={classes.link}>
        <Button onClick={handleClick} variant="contained" color="primary">
          Jugar de nuevo ?
        </Button>
      </Link>
      <Link to="/" className={classes.link}>
        <Button onClick={handleClick} variant="contained" color="primary">
          Volver al menu Principal ?
        </Button>
      </Link>
    </div>
  );
}
