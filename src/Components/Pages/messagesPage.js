import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import API from '../../api';
import {
  Menu,
  MenuItem,
  MenuList,
  Avatar,
  Typography,
  Grid,
  TextField,
  Paper,
  Hidden,
} from '@material-ui/core';
//import { makeStyles } from '@material-ui/styles';

import 'react-chat-elements/dist/main.css';
import { MessageList, Input, Button } from 'react-chat-elements';

import getMessagesPageClasses from '../../Styles/messagesPageStyles';
import api from '../../api';

const MessagesPage = props => {
  const userId = localStorage.getItem('userId') || '1';
  const [user, setUser] = useState(null);
  const [latestContacts, setLatestContacts] = useState([]);
  const [messages, setMessages] = useState([
    {
      id: 1,
      position: 'left',
      type: 'text',
      text: '[something interesting], do you have time?',
      date: new Date(),
    },
    {
      id: 2,
      position: 'right',
      type: 'text',
      text: 'Hello! sounds interesting, more details?',
      date: new Date(),
    },
  ]);

  var refInput = null; // temp, until a solution comes

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUser = async () => {
    try {
      var response = await api.get(`/users/${userId}`);
      console.log(response);
      console.log(response.data);
      setUser(response.data);
      localStorage.setItem('userId', response.data.id);
    } catch (error) {
      console.error(error);
    }
  };

  // should be async when the call is real...
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getLatestContacts = () => {
    try {
      //
      // const response = await API.get(`/users/${userId}/contacts/latest`);
      var users = [
        {
          id: 2,
          full_name: 'User 2',
          username: 'monitor2',
          email: 'deliverables0@faker.net',
          password: 'd2800ce0-8f0b-4068-abc1-c1ba284cad2e',
          profile_photo_url: null,
          header_photo_url: null,
          work_status: 'Employed',
          bio: null,
          permissions_id: null,
        },
        {
          id: 3,
          full_name: 'User 3',
          username: 'monitor3',
          email: 'deliverables0@faker.net',
          password: 'd2800ce0-8f0b-4068-abc1-c1ba284cad2e',
          profile_photo_url: null,
          header_photo_url: null,
          work_status: 'Employed',
          bio: null,
          permissions_id: null,
        },
        {
          id: 4,
          full_name: 'User 4',
          username: 'monitor4',
          email: 'deliverables0@faker.net',
          password: 'd2800ce0-8f0b-4068-abc1-c1ba284cad2e',
          profile_photo_url: null,
          header_photo_url: null,
          work_status: 'Employed',
          bio: null,
          permissions_id: null,
        },
      ];
      var usersUI = [];
      users.forEach(u => usersUI.push(<MenuItem key={u.id}>{u.full_name}</MenuItem>));
      setLatestContacts(usersUI);
    } catch (error) {
      console.error(error);
    }
  };

  const sendMessage = () => {
    var msg = refInput.state.value.trim();
    if (msg === '') {
      return; // don't send ...
    }
    // [insert API call here]
    setMessages([
      ...messages,
      {
        id: messages[messages.length - 1].id + 1,
        position: 'right', // because sender
        type: 'text',
        text: msg,
        date: new Date(),
      },
    ]); // push the new message
    refInput.state.value = '';
  };

  // useEffect(() => {
  //   getUser();
  // }, [getUser]);

  // useEffect(() => {
  //   getLatestContacts();
  // }, [getLatestContacts]);

  useEffect(() => {
    getUser();
    getLatestContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = getMessagesPageClasses(props.appTheme);

  return (
    <Grid container spacing={2}>
      <Hidden mdDown>
        <Grid item lg={3}>
          <Typography variant="h6">Most Recent Contacts</Typography>
          {latestContacts}
        </Grid>
      </Hidden>
      <Grid item xs={12} lg={6} overflow="hidden">
        <Paper>
          <div>
            <MessageList
              className={`message-list ${classes.ChatClasses.root}`}
              lockable={false}
              dataSource={messages}
              toBottomHeight="100%"
            />
          </div>
          <Input
            className={classes.InputClasses.root}
            placeholder="Type here..."
            multiline={true}
            ref={el => (refInput = el)}
            onKeyPress={e => {
              if (e.shiftKey && e.charCode === 13) {
                console.log('new line');
                return true;
              } else if (!e.shiftKey && e.charCode === 13) {
                console.log('send');
                sendMessage();
                e.preventDefault();
                return false;
              }
            }}
            rightButtons={<Button text="Send" onClick={sendMessage} />}
          />
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={3} />
      </Hidden>
    </Grid>
  );
};

MessagesPage.propTypes = {
  userID: PropTypes.string,
  //TODO: Add More PropTypes
};

export default MessagesPage;
