import React, { useState, useEffect } from 'react';

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/teams')
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div>
      
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <h3>{team.team_name}</h3>
            Home Kit: <img src={team.home_kit_image} alt="Home Kit" />
            Away Kit: <img src={team.away_kit_image} alt="Away Kit" />
            <p>Price: ${team.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;