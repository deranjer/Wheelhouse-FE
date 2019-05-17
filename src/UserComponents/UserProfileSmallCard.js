import React from 'react'
import API from '../api';
import { Card, Icon, Image } from 'semantic-ui-react';

class UserSmallCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userID: 1
    }
  }

  componentDidMount(){
    API.get(`users/${this.state.userID}`)
      .then(result => {
        console.log(result);
        console.log(result.data)
      })
  }
  
  render() {
    return (
      <Card raised>
        <Card.Content>
          <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
          <Card.Header>deranjer</Card.Header>
          <Card.Meta>Looking to Collaborate</Card.Meta>
          <Card.Description>
            Experienced 3D Modeler in Blender. Also Experienced in Substance Painter
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
              <Icon name='tags' />
              3D Modeling, Texturing, golang, deployment, UE4, Unity
          </a>
        </Card.Content>
      </Card>

      );
    }
}

export default UserSmallCard