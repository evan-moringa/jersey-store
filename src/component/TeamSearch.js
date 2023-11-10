import React, { useState, useEffect } from 'react';

const TeamSearch = () => {
  const [teams, setTeams] = useState([]);
  const [newTeamName, setNewTeamName] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/teams')
      .then((response) => response.json())
      .then((data) => setTeams(data));
  }, []);

  const addNewTeam = () => {
    if (newTeamName) {
      fetch('http://localhost:3000/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newTeamName,
        }),
      })
        .then((response) => response.json())
        .then((data) => setTeams((prevTeams) => [...prevTeams, data]));

      setNewTeamName('');
    } else {
      alert('Please enter team name.');
    }
  };

  return (
    <div>
      <h2>Team Collection</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>

      <h2>Add a New Team</h2>
      <label htmlFor="newTeamName">Team Name:</label>
      <input
        type="text"
        id="newTeamName"
        value={newTeamName}
        onChange={(e) => setNewTeamName(e.target.value)}
      />

      <button onClick={addNewTeam}>Add New Team</button>
    </div>
  );
};

export default TeamSearch;
