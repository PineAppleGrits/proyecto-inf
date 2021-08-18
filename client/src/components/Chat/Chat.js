import React, { Suspense } from 'react';
import MessageBox from './MessageBox/MessageBox';
import Messages from './Messages/Messages';
import useChat from './useChat';

const Chat = (currentUserData) => {
  const { messages, sendMessage } = useChat();
  return (
    <div>
      <Suspense fallback="Loading..">
        <Messages messages={messages} />
      </Suspense>
      <MessageBox
        userData={currentUserData}
        onSendMessage={(message) => {
          sendMessage(message);
        }}
      />
    </div>
  );
};

export default Chat;
