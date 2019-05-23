import React, { useState, useEffect } from "react";
import PropTyes from 'prop-types';
import API from "../../api";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';


function UserSmallCard(props) {
  const [userId, setUserId] = useState(1);
  
  useEffect(() => {
    API.get(`users/${`userID`}`).then(result => {
      console.log(result);
      console.log(result.data);
    });
  }, [userId]);

  
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={16} wrap="nowrap">
          <Grid item style={{ maxWidth: "400px"}}>
            <Card>
              <CardHeader
                title="deranjer"
                subheader="Looking to Collaborate"
                avatar={<Avatar aria-label="Recipe">D</Avatar>}
              />
              <CardContent>
                <Typography>
                  Experienced 3D Modeler in Blender. 
                  Experienced in Substance Painter. 
                  Looking for a challange.
                  </Typography>
                <Typography align="center" variant="h6">Skills</Typography>
                <Divider variant="fullWidth"/>
                <Chip label="3d Modeling"/>
              </CardContent> 


            </Card>
          </Grid>
        </Grid>

      </Grid>
    </Grid>

      
  );
}

export default UserSmallCard;