import React, { useState, useEffect } from 'react'
import API from '../api';
import { Card, Icon, Image, Label, Grid, Header, Dropdown } from 'semantic-ui-react';

var imageOverLapStyle = {
  position: 'absolute',
  top: '100px'
}

const UserProfile = (props) => {
  const [userID, setUser] = useState(0);


  useEffect(() => {
    API.get(`users/${userID}`).then(result => {
      console.log(result);
      console.log(result.data);
    });
  }, [userID]);


  return (
    <React.Fragment>
      <Grid>
        <Grid.Row columns={3}>
        <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={10}>
            <Image src='https://www.van-tramp.com/wp/wp-content/uploads/2013/07/IMG_5831.jpg' fluid rounded />
            <div style={imageOverLapStyle}><Image src='http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png' size='medium' circular /></div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={3}>
              <Header size='huge'>Username</Header>
                <Dropdown.Menu text='More' icon='elipses horizontal'>
                  <Dropdown.Item text='Block' />
                </Dropdown.Menu> 
              <Card>
                <Card.Content>
                  <Card.Description>I am an experienced user with Blender and Substance Painter.  I have a one released game created with Unity.  I also have a lot of experience with UE4 Blueprints, materials and Niagara System.  Looking for a unique game to create.</Card.Description>
                </Card.Content>
              </Card>   
          </Grid.Column>
          <Grid.Column width={10}>
            <Label>
              Blender 3D
            </Label>
          </Grid.Column>
        </Grid.Row>
      </Grid> 
  </React.Fragment>
  );
}
  
export default UserProfile