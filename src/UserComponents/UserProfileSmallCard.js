import React, { useState, useEffect } from "react";
import API from "../api";
import {
  Card,
  Divider,
  Grid,
  Row,
  Segment,
  Icon,
  Image,
  Label,
  LabelDetail,
  GridRow
} from "semantic-ui-react";

function UserSmallCard(props) {
  const [userId, setUserId] = useState(1);
  
  useEffect(() => {
    API.get(`users/${`userID`}`).then(result => {
      console.log(result);
      console.log(result.data);
    });
  }, [userId]);

  return (
    <Grid textAlign="center">
      <Card padded raised style={{ height: "250px" }}>
        <Card.Content textAlign="left">
          <Image
            floated="center"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>deranjer</Card.Header>
          <Card.Meta>Looking to Collaborate</Card.Meta>
          <Card.Description>
            Experienced 3D Modeler in Blender. Experienced in Substance Painter
          </Card.Description>
          <Divider horizontal>Skills</Divider>
          <Grid textAlign="center" columns="equal" style={{ height: "100px" }}>
            <Grid.Row style={{ height: "0px" }}>
              <Label>3D Modeling</Label>
              <Label>Texturing</Label>
              <Label>golang</Label>
            </Grid.Row>
            <Grid.Row style={{ height: "0px" }}>
              <Label>deployment</Label>
              <Label>UE4</Label>
              <Label>golang</Label>
              <Label>UE4</Label>
            </Grid.Row>
            <Grid.Row style={{ height: "0px" }}>
              <Label>deployment</Label>
              <Label>UE4</Label>
              <Label>UE4</Label>
              <Label>golang</Label>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </Grid>
  );
}

export default UserSmallCard;