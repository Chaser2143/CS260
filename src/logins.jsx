//Used as WebSocket Tag in app.jsx

import React from 'react';

import { LoginEvent, loginNotifier } from './loginNotifier';

export function Logins(props) {
  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    loginNotifier.addHandler(handleGameEvent);

    return () => {
      loginNotifier.removeHandler(handleGameEvent);
    };
  });

  function handleGameEvent(event) {
    setEvent([...events, event]);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      console.log(event);
      let message = 'unknown';
      if (event.value == LoginEvent.End) {
        message = `Websocket Disconnected`;
        console.log("Msg is disconnected");
      } else if (event.value == LoginEvent.Start) {
        message = `Websocket Connected`;
        console.log("Msg is connected");
      } else{
        message = event.value + " Just Logged In!";
        console.log("Msg is login");
      }

      messageArray.push(
        <span className='event'>
          {message}
        </span>
      );
    }
    console.log(messageArray);
    return messageArray[messageArray.length-1];
  }

  return (
    createMessageArray()
  );
}
