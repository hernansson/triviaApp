import { useState } from "react";
import { Button } from "@material-ui/core";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./trivia.css";
import Home from "./Home";
import Settings from "./Settings";
import Trivia from "./Trivia";
import Congratz from "./Congratz";
import useFetch from "./customHooks/useFetch";
import LinearProgress from "@mui/material/LinearProgress";
import { TriviaContext } from "../context/triviaContext";
import { useContext } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";
import { urlAPI } from "./config";
const TriviaGame = () => {
  const { data, loading, error } = useFetch(urlAPI);
  const { barActive, setAsserts } = useContext(TriviaContext);
  return (
    <BrowserRouter>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          {barActive && (
            <AppBar
              style={{
                backgroundColor: "#9325c7",
                height: "8%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="container">
                <div className="leftArea">
                  <Toolbar>
                    <IconButton
                      to="/"
                      component={Link}
                      edge="start"
                      color="inherit"
                      aria-label="back"
                      sx={{ mr: 2 }}
                      onClick={() => setAsserts(0)}
                    >
                      <BackIcon />
                    </IconButton>
                  </Toolbar>
                </div>
                <div className="middleArea">
                  <Typography variant="h6" component="div" noWrap={true}>
                    Enjoy!
                  </Typography>
                </div>
              </div>
            </AppBar>
          )}

          <Routes>
            <Route
              path="/"
              element={<Home title={data.title} image={data.image} />}
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/trivia" element={<Trivia data={data.questions} />} />
            <Route path="/congratz" element={<Congratz />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default TriviaGame;
