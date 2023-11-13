import React, { useEffect, useState } from "react";

function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch teams from the backend API
    fetch("https://jersey-wrld.onrender.com/teams")
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error("Error fetching teams:", error));
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamList;