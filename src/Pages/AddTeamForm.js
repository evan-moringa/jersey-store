import React, { useState } from "react";

function AddTeamForm({ onAddTeam }) {
  const [teamName, setTeamName] = useState("");

  const handleAddTeam = () => {
    

    // Send a POST request to your backend API
    fetch("https://jersey-wrld.onrender.com/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: teamName }),
    })
      .then((response) => response.json())
      .then((data) => {
        
        onAddTeam(data);
        setTeamName(""); 
      })
      .catch((error) => console.error("Error adding team:", error));
  };

  return (
    <div>
      <label>
        Team Name:
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </label>
      <button onClick={handleAddTeam}>Add Team</button>
    </div>
  );
}

export default AddTeamForm;