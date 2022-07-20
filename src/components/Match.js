import React from "react";

export default function Match(props) {
  return (
    <article className="Match">
      <h1>
        {props.player1} <span>vs</span> {props.player2}
      </h1>
      {props.winner ? (
        <h2>{props.winner} is the winner by 1!</h2>
      ) : (
        <h2>No winners yet!</h2>
      )}
    </article>
  );
}
