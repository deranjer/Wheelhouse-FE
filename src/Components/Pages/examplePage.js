import React from 'react';
import PropTyes from 'prop-types';
import UserSmallCard from '../UserComponents/UserProfileSmallCard';
import UserPortfolioCard from '../UserComponents/UserPortfolioCard';
import ProjectSmallCard from '../ProjectComponents/ProjectSmallCard';
import StatusUpdate from '../PageComponents/statusUpdate';
import TestComp from '../testComp';
import {Grid} from "@material-ui/core";

const ExamplePage = () => (  
    <Grid container justify="center">
      UserSmallCard:
      <Grid container justify="center">
        <UserSmallCard />
      </Grid> 
      UserPortfolioCard:       
      <Grid container justify="center">
        <UserPortfolioCard />
      </Grid>
      ProjectSmallCard:
      <Grid container justify="center">
        <ProjectSmallCard />
      </Grid>
      StatusUpdate:
      <Grid container justify="center">
        <StatusUpdate />
      </Grid>
      TestComp:
      <Grid container justify="center">
        <TestComp />
      </Grid>
    </Grid>
)
  
export default ExamplePage;