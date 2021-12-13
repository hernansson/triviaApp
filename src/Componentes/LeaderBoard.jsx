import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../styles/styles";
import { TriviaContext } from "../context/triviaContext";
import { useContext } from "react";

export default function LeaderBoard() {
  const { setBarActive } = useContext(TriviaContext);
  const leaderBoard = JSON.parse(localStorage.getItem("leaderboard"));
  setBarActive(true);
  const slicedArr = leaderBoard
    ?.sort((a, b) => b.asserts - a.asserts)
    .slice(0, 10);
  const classes = styles();
  return (
    <div className={classes.leaderBoard}>
      <h1>Ranking TOP 10 de jugadores</h1>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table
          rowsPerPageOptions={[5]}
          className={classes.table}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Asserts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedArr?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userName}
                </TableCell>
                <TableCell align="right">{row.asserts}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
