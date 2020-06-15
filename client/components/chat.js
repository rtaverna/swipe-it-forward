import React from 'react'
import {render} from 'enzyme'

const Chat = () => (
  <div id="chat">
    <div id="chat-window">
      <div id="output" />
    </div>
    <input id="handle" type="text" placeholder="Handle" />
    <input id="message" type="text" placeholder="Message" />
    <button id="send">Send</button>
  </div>
)
export default Chat
