import React, { useState, useEffect } from 'react';

const TeamSearch = () => {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/teams')
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        setFilteredTeams(data); // filteredTeams with all teams
      });
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = teams.filter((team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTeams(filtered);
  };

  return (
    <div>
      <h2>Team Collection</h2>
      <label htmlFor="searchTeam">Search Team:</label>
      <input
        type="text"
        id="searchTeam"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <ul>
        {filteredTeams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamSearch;