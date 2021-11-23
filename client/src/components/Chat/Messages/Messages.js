import React, { useEffect, useRef } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Messages = function ({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(scrollToBottom, [messages]);
  return (
    <div style={{ maxHeight: '80vh', overflow: 'auto' }}>
      <List>
        {messages.flatMap((messageObject, index) => [
          <ListItem alignItems="flex-start" key={index}>
            <ListItemAvatar>
              <Avatar alt="Avatar alt text" src={messageObject.message_author.profile_picture} />
            </ListItemAvatar>
            <ListItemText
              primary={(
                <span className="username-1A8OIy desaturateUserColors-1gar-1 clickable-1bVtEA" role="button" tabIndex={0}>
                  {messageObject.message_author.name}
                </span>
              )}
              secondary={(
                <div className="contents-2mQqc9">
                  <div id="message-content-885696197313060965" className="markup-2BOw-j messageContent-2qWWxC">{messageObject.content}</div>
                </div>
              )}
            />
          </ListItem>,
          <Divider variant="inset" component="li" key={`divider-${index}`} />,
        ])}
      </List>
      <div ref={messagesEndRef} />
    </div>
  );
};
Messages.propTypes = {
  messages: PropTypes.object.isRequired,
};
export default Messages;
