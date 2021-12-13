import React from "react";
import { useContext } from "react";
import { TriviaContext } from "../context/triviaContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import "./trivia.css";

export default function Trivia({ data }) {
  const { setBarActive, asserts, setAsserts } = useContext(TriviaContext);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  const [parcialResult, setParcialResult] = useState("");
  const navigate = useNavigate();
  setBarActive(true);
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleClick = (selectedValue) => {
    const nextQuestion = () => {
      setClicked(false);
      setQuestionNumber((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowTimer(true);
    };
    setClicked(true);
    setSelectedAnswer(selectedValue);
    setClassName({ true: "answer correct", false: "answer wrong" });
    // If selectedValue is undefined - user did not select anything
    if (selectedValue) {
      delay(1000, () => {
        if (selectedValue.correct) {
          setParcialResult("CORRECTO!");
          delay(3000, () => {
            nextQuestion();
            setAsserts(asserts + 1);
          });
        } else {
          setParcialResult("INCORRECTO!");
          delay(3000, () => {
            nextQuestion();
          });
        }
        setShowTimer(false);
      });
    } else {
      setSelectedAnswer("otherThanNull"); // disable Click
      setParcialResult("TIEMPO ACABADO :(!");
      delay(4000, () => {
        nextQuestion();
      });
      setShowTimer(false);
    }
  };
  useEffect(() => {
    if (questionNumber === data.length) {
      navigate("../congratz");
    } else {
    }
  }, [questionNumber]);

  return (
    <div className="trivia">
      <h3>{`Pregunta ${questionNumber + 1} / ${data.length}`}</h3>
      <Box sx={{ width: "75%", paddingBottom: "10px" }}>
        <LinearProgress
          className="volumeBar"
          variant="determinate"
          value={((questionNumber + 1) / 4) * 100}
        />
      </Box>

      <div style={{ paddingBottom: "20px" }}>
        {showTimer ? (
          <CountdownCircleTimer
            isPlaying={true}
            duration={
              data[questionNumber] ? data[questionNumber].lifetimeSeconds : 3
            }
            size={90}
            strokeWidth={8}
            colors={[
              ["#00FF00", 0.33],
              ["#F7B801", 0.33],
              ["#A30000", 0.33],
            ]}
            onComplete={() => handleClick(null)}
            key={questionNumber}
          >
            {({ remainingTime }) => (
              <p style={{ fontSize: "50px" }}>{`${remainingTime}`}</p>
            )}
          </CountdownCircleTimer>
        ) : (
          <h1>{parcialResult}</h1>
        )}
      </div>
      <div className="question">{data[questionNumber]?.text}</div>
      <div className="answers">
        {data[questionNumber]?.options.map((resp) => (
          <div
            className={clicked ? className[resp.correct] : "answer"}
            onClick={() => !selectedAnswer && handleClick(resp)}
          >
            {resp.text}
          </div>
        ))}
      </div>
    </div>
  );
}
