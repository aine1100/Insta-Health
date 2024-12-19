import React from "react";

const ChatInput = () => {
  return (
    <div className="flex p-3 bg-white border-t">
      <input
        type="text"
        placeholder="What would you like to say?"
        className="flex-1 p-2 border rounded-md focus:outline-cyan-500"
      />
      <button className="ml-3 p-2 bg-cyan-600 text-white rounded-md">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
