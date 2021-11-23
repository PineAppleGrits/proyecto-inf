import { useEffect, useState, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import { useParams } from 'react-router';

const useChat = () => {
  const { channelId, serverId } = useParams();
  const socketRef = useRef();
  const PORT = process.env.PORT || 5000;
  const URL = `http://localhost`
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socketRef.current = socketIOClient();

    socketRef.current.emit('onServer', channelId,serverId);
    socketRef.current.on('mostRecentMessages', (mostRecentMessages) => {
      // On start, load recents
      setMessages(() => [...mostRecentMessages]);
    });

    socketRef.current.on('newChatMessage', ({ name, avatar, content }) => {
      // append message to the end of array, after using spread operator

      setMessages((msg) => [
        ...msg,
        {
          name,
          avatar,
          content,
        },
      ]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [channelId,serverId]);
  const sendMessage = (messageObject) => {
    socketRef.current.emit('newChatMessage', messageObject);
  };

  return { messages, sendMessage };
};

export default useChat;
