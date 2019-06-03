import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import API from "../../api";
import {Menu, MenuItem, Typography, Grid, Divider} from "@material-ui/core";
import {Card, CardContent, CardHeader, CardActions} from "@material-ui/core";
import {Button} from "@material-ui/core";


const MessageCard = ({onReplyClick}) => {
  const [userId, setUserId] = useState(1);
  
  useEffect(() => {
    API.get(`users/${`userID`}`).then(result => {
      //TODO: Pull user data from API
      console.log(result);
      console.log(result.data);
    });
  }, [userId]);  
  
  return (
    <Grid item>
      <Card style={{ maxHeight: "600px"}}>
        <CardHeader
          subheader="1 hour ago"          
        />
        <CardContent>
          <Typography>
            This is a text message one user sent to another.  We can either have a text limit or collapse the text and do a "see more" like Facebook.
            </Typography>
          
          <Divider variant="fullWidth" style={{ margin: "5px"}}/>
          <CardActions>
              <Button size="small" color="primary" onClick={onReplyClick}>
                  Reply
              </Button>
              <Button size="small" color="primary">
                  Accept
              </Button>
              <Button size="small" color="primary">
                  Delete
              </Button>
          </CardActions>
        </CardContent> 
      </Card>
    </Grid>   
  );
}

MessageCard.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
}


export default MessageCard;