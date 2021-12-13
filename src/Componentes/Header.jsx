import React from "react";
import { TriviaContext } from "../context/triviaContext";
import { useContext } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export default function Header() {
  const { barActive, setAsserts } = useContext(TriviaContext);
  return (
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
    </>
  );
}
