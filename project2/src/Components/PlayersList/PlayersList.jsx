import React from 'react';
import Players from '../Players/Players';
import Player from '../Player/Player';


const PlayersList = () => {
  return (
    <div className="players-list">
      <h1>FIFA CARDS</h1>
      <div className="players-grid">
        {Players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;










