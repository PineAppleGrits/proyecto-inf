import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { useParams, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MessageBox = function (props) {
  const { channelId } = useParams();
  const [message, setMessage] = useState('');
  const messageRef = useRef('');

  const sendMessageClick = () => {
    if (messageRef.current.value === '') {
      return false;
    }
    messageRef.current.value.replace(/\s+$/gm, '');
    const messageObject = {
      message: messageRef.current.value,
      message_author: props.auth.user._id,
      channel_id: channelId,
    };
    console.log({ messageObject });
    props.onSendMessage(messageObject);
    return setMessage('');
  };

  return (
    <form className="chat-form" autoComplete="off">
      <TextField
        className="form-control"
        type="text"
        id="outlined-basic"
        margin="normal"
        variant="outlined"
        multiline
        placeholder="Manda algo piola"
        inputRef={messageRef}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            // prevents enter from being pressed && create nwe line
            event.preventDefault();
            sendMessageClick();
          }
        }}
        value={message}
      />
      <button type="submit" className="btn btn-lg btn-primary" onClick={sendMessageClick}>
        Send
      </button>
    </form>
  );
};
MessageBox.propTypes = {
  userData: PropTypes.object.isRequired,
  onSendMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,

});
export default withRouter(connect(mapStateToProps)(MessageBox));
