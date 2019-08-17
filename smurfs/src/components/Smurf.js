import React from 'react';
import { Card } from 'semantic-ui-react';

const Smurf = props => {
  return (
    <div className="card-wrapper">
      <Card>
        <Card.Content>
          <Card.Header>{ props.smurf.name }</Card.Header>
          <Card.Meta>{ props.smurf.age }</Card.Meta>
          <Card.Description>{ props.smurf.height }</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Smurf;