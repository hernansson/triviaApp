import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./trivia.css";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import Trivia from "./Trivia";
import Congratz from "./Congratz";
import useFetch from "./customHooks/useFetch";
import LinearProgress from "@mui/material/LinearProgress";
import { urlAPI } from "../Env/config";
import Header from "./Header";
const TriviaGame = () => {
  const { data, loading, error } = useFetch(urlAPI);
  return (
    <BrowserRouter>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home title={data.title} image={data.image} />}
            />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/trivia" element={<Trivia data={data.questions} />} />
            <Route path="/congratz" element={<Congratz />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default TriviaGame;
