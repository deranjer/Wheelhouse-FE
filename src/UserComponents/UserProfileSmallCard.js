import React from 'react'
import API from '../api';
import { Card, Icon, Image, Label, LabelDetail } from 'semantic-ui-react';

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
              <Label>3D Modeling</Label>
              <Label>Texturing</Label>
              <Label>golang</Label>
              <Label>deployment</Label>
              <Label>UE4</Label>
        </Card.Content>
      </Card>

      );
    }
}

export default UserSmallCard