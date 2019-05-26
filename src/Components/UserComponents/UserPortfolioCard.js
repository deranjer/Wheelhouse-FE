import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import API from "../../api";
import {Typography} from "@material-ui/core";
import {Card, CardContent, CardActionArea, CardMedia} from "@material-ui/core";

const UserPortfolioCard = (props) => {
  const [userId, setUserId] = useState(1);
  const [portfolioLink, setPortfolioLink] = useState('Link') 

  
  useEffect(() => {
    API.get(`users/${`userID`}`).then(result => {
      //TODO: Pull user data from API
      console.log(result);
      console.log(result.data);
    });
  }, [userId]);
  
  return (
    <Card style={{width: '200px', height: '200px'}} >
        <CardActionArea >
            <CardMedia
                style={{height: '150px', width: '200px'}}
                image="/images/artstation-logo.png"
                title="Artstation"
                to="https://artstation.com"// TODO: Cant even figure out how to fucking link to a website.
            >
            </CardMedia>
        <CardContent>
            <Typography gutterBottom variant="h6" component="h2" align="center">
                Site Name Here
            </Typography>
        </CardContent> 
        </CardActionArea>  
    </Card>
  );
}

UserPortfolioCard.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
}


export default UserPortfolioCard;