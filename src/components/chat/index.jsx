import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

import Header from "../customHeader";
import StandardMessageForm from "../customNessageForms/StandardMessageForm";

const Chat = () => {
  const chatProps = useMultiChatLogic(
    "6e0f431c-1784-40f5-a1ce-2f237a2720ec",
    "testuser",
    "12345"
  );
  return (
    <div style={{ flexBasis: "1000%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
};

export default Chat;
