import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Image, Grid, Button, Message } from 'semantic-ui-react';

const TeamCollection = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/teams')
      .then((res) => res.json())
      .then((teams) => setTeams(teams));
  }, []);

  const handleAddToCart = (teamId) => {
    
    setSelectedTeam(teamId);
    // Show an alert when the "Add to Cart" button is clicked
    window.alert(`Kit ${teamId} has been added to the cart.`);
  };

  const handleDeleteTeam = (teamId) => {
   
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
      <Grid columns={3} doubling>
        {teams.map((team) => (
          <Grid.Column key={team.id} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <Card>
              <Image src={team.home_kit_image} alt="Home Kit" wrapped ui={false} />
              <Card.Content>
                <Card.Header>{team.team_name}</Card.Header>
                <Card.Meta>${team.price.toFixed(2)}</Card.Meta>
                <Button primary onClick={() => handleAddToCart(team.id)}>
                  Add to Cart
                </Button>
              
                <Button color="red" onClick={() => handleDeleteTeam(team.id)}>
                  Delete
                </Button>
              </Card.Content>
            </Card>
            <Card>
              <Image src={team.away_kit_image} alt="Away Kit" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Away Kit - {team.team_name}</Card.Header>
                <Button primary onClick={() => handleAddToCart(team.id)}>
                  Add to Cart
                </Button>
               
                <Button color="red" onClick={() => handleDeleteTeam(team.id)}>
                  Delete
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
      {selectedTeam && (
        <Message positive>
          <Message.Header>Added to Cart</Message.Header>
          <p>{`Kit ${selectedTeam} has been added to the cart.`}</p>
        </Message>
      )}
    </div>
  );
};

export default TeamCollection;