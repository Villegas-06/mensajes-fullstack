import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${msg.from === "Me" ? "sender" : "receiver"}`}
        >
          <div className="message-content">
            <div className="message-text">{msg.message}</div>
            <div className="message-timestamp">
              {formatTimestamp(msg.timestamp)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function formatTimestamp(timestamp) {
  const options = { hour: "numeric", minute: "numeric", second: "numeric" };
  return new Date(timestamp).toLocaleString("en-US", options);
}

export default MessageList;
