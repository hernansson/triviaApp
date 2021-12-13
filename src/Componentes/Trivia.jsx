import React from "react";
import { useContext } from "react";
import { TriviaContext } from "../context/triviaContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./trivia.css";

export default function Trivia({ data }) {
  const { setBarActive, asserts, setAsserts } = useContext(TriviaContext);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  setBarActive(true);
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleClick = (selectedValue) => {
    setClicked(true);
    setSelectedAnswer(selectedValue);
    setClassName({ true: "answer correct", false: "answer wrong" });
    // If selectedValue is undefined - user did not select anything
    if (selectedValue) {
      delay(1000, () => {
        if (selectedValue.correct) {
          delay(1000, () => {
            setClicked(false);
            setQuestionNumber((prev) => prev + 1);
            setSelectedAnswer(null);
            setAsserts(asserts + 1);
          });
        } else {
          delay(1000, () => {
            setClicked(false);
            setQuestionNumber((prev) => prev + 1);
            setSelectedAnswer(null);
          });
        }
      });
    } else {
      delay(1000, () => {
        delay(1000, () => {
          setClicked(false);
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      });
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
      <div style={{ paddingBottom: "20px" }}>
        <CountdownCircleTimer
          isPlaying={true}
          duration={
            data[questionNumber] ? data[questionNumber].lifetimeSeconds : 3
          }
          size={120}
          strokeWidth={10}
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
