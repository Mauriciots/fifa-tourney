import React from "react";
import matches from "../data/matchesData";
import players from "../data/playersData";
import Match from "./Match";

export default function MatchesList() {
  return (
    <section className="MatchList">
      <h1>Match List</h1>
      {matches.map((match) => {
        const player1 = players[`id${match.players[0]}`];
        const player2 = players[`id${match.players[1]}`];
        const winner = players[`id${match.winner}`];

        return (
          <Match
            key={match.id}
            player1={player1.name}
            player2={player2.name}
            winner={winner?.name}
          />
        );
      })}
    </section>
  );
}
