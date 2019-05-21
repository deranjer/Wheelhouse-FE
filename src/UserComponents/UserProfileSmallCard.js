import React, { useState, useEffect } from "react";
import API from "../api";

function UserSmallCard(props) {
  const [userId, setUserId] = useState(1);
  
  useEffect(() => {
    API.get(`users/${`userID`}`).then(result => {
      console.log(result);
      console.log(result.data);
    });
  }, [userId]);

  return (
    <React.Fragment>
      
    </React.Fragment>
  );
}

export default UserSmallCard;