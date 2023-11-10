import React, { useState } from 'react';

const CreateTeamForm = () => {
  const [teamName, setTeamName] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const [price, setPrice] = useState('');

  const handleCreateTeam = async () => {
    // Prepare data to be sent in the POST request
    const teamData = {
      name: teamName,
      pictureUrl: pictureUrl,
      price: price,
    };

    try {
      // Make a POST request using the Fetch API
      const response = await fetch('http://localhost:3000/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teamData),
      });

      if (!response.ok) {
        throw new Error('Failed to create team');
      }

      const data = await response.json();
      console.log('Success:', data);

      // Handle success, e.g., redirect to another page or update state
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h1>Create Team</h1>
      <form>
        <label htmlFor="teamName">Team Name:</label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          required
        />

        <label htmlFor="pictureUrl">Picture URL:</label>
        <input
          type="text"
          id="pictureUrl"
          value={pictureUrl}
          onChange={(e) => setPictureUrl(e.target.value)}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="button" onClick={handleCreateTeam}>
          Create Team
        </button>
      </form>
    </div>
  );
};

export default CreateTeamForm;

