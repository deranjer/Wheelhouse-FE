import React, { useState, useEffect } from 'react'
import API from '../api';

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
      
  </React.Fragment>
  );
}
  
export default UserProfile