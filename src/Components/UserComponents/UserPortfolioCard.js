import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import API from "../../api";
import {Typography} from "@material-ui/core";
import {Card, CardContent, CardActionArea, CardMedia} from "@material-ui/core";

const UserPortfolioCard = (props) => {
  const [userId, setUser] = useState(1);
  const [portfolioLink, setPortfolioLink] = useState('Link') 

  
  async function getUser() {
    try {
      const response = await API.get(`users/1`);
      console.log(response);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  
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