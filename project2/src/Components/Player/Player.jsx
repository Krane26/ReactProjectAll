import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="player-card">
      <img src={imageUrl} alt={name} className="player-image" />
      <div className="player-details">
        <h3>{name}</h3>
        <p><strong>Team:</strong> {team}</p>
        <p><strong>Nationality:</strong> {nationality}</p>
        <p><strong>Jersey Number:</strong> {jerseyNumber}</p>
        <p><strong>Age:</strong> {age}</p>
      </div>
    </div>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "",
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  jerseyNumber: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Player;
