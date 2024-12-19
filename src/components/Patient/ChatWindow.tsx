import React from "react";
import ChatInput from "./ChatInput";
import { profile } from "../../utils/Image";

const messages = [
  { id: 1, text: "Oh my god, Chris, he knows.Oh my god, Chris, he knows.Oh my god, Chris, he knows.Oh my god, Chris, he knows.", sender: "other", time: "12:01 PM" },
  { id: 2, text: "Good Chris. I've taught you well.", sender: "self", time: "12:02 PM" },
  { id: 3, text: "Did you forget something?", sender: "other", time: "12:03 PM" },
  { id: 4, text: "No, I double-checked everything.", sender: "self", time: "12:04 PM" },
  { id: 5, text: "Oh my god, Chris, he knows.", sender: "other", time: "12:05 PM" },
  { id: 6, text: "Good Chris. I've taught you well.", sender: "self", time: "12:06 PM" },
  { id: 7, text: "Did you forget something?", sender: "other", time: "12:07 PM" },
  { id: 8, text: "No, I double-checked everything.", sender: "self", time: "12:08 PM" },
  { id: 9, text: "Oh my god, Chris, he knows.", sender: "other", time: "12:09 PM" },
  { id: 10, text: "Good Chris. I've taught you well.", sender: "self", time: "12:10 PM" },
  { id: 11, text: "Oh my god, Chris, he knows.", sender: "other", time: "12:11 PM" },
  { id: 12, text: "Good Chris. I've taught you well.", sender: "self", time: "12:12 PM" },
  { id: 13, text: "Did you forget something?", sender: "other", time: "12:13 PM" },
  { id: 14, text: "No, I double-checked everything.", sender: "self", time: "12:14 PM" },
];


const ChatWindow = () => {
  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Chat Header */}
      <div className="px-4 py-2 space-x-4 flex bg-cyan-700 text-white">
        <img src={profile} alt="profile" className="rounded-[50%]" />
        <div>
        <h2 className="text-lg font-bold">Joe Swanson</h2>
        <p className="text-sm">Doctor at king faisal hospital</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-3 rounded-lg w-fit max-w-[65%] relative ${
              message.sender === "self"
                ? "ml-auto bg-cyan-700 text-gray-200 "
                : "bg-gray-200 text-gray-700 "
            }`}
          >
            <span>{message.text}</span>
            <span
              className={` block text-xs absolute bottom-0 right-2 ${
                message.sender === "self" ? "text-gray-200" : "text-gray-600"
              }`}
            >
              {message.time}
            </span>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
