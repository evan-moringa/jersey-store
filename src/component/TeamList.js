import React, { useState, useEffect } from 'react';

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/teams')
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  const handleDeleteTeam = (teamId) => {
    // Make a DELETE request to the server to delete the team
    fetch(`http://localhost:3000/teams/${teamId}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          
          setTeams((prevTeams) => prevTeams.filter((team) => team.id !== teamId));
        } else {
          console.error('Failed to delete team');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h4>Football Teams</h4>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <h3>{team.team_name}</h3>
            Home Kit: <img src={team.home_kit_image} alt="Home Kit" />
            Away Kit: <img src={team.away_kit_image} alt="Away Kit" />
            <p>Price: ${team.price.toFixed(2)}</p>         
            <button onClick={() => handleDeleteTeam(team.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
