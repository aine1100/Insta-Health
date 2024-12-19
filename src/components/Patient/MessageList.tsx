import React from "react";
import UserCard from "./UserCard";

const MessageList = () => {
  const messages = [
    { name: "Joe Swanson", time: "27 seconds ago", message: "You didn't get ice cream?" },
    { name: "Meg Griffin", time: "Dec 7, 2022", message: "Good Chris. I've taught you well." },
    { name: "Joe Swanson", time: "27 seconds ago", message: "You didn't get ice cream?" },
    { name: "Meg Griffin", time: "Dec 7, 2022", message: "Good Chris. I've taught you well." },
    { name: "Joe Swanson", time: "27 seconds ago", message: "You didn't get ice cream?" },
    { name: "Meg Griffin", time: "Dec 7, 2022", message: "Good Chris. I've taught you well." },
    { name: "Joe Swanson", time: "27 seconds ago", message: "You didn't get ice cream?" },
    { name: "Meg Griffin", time: "Dec 7, 2022", message: "Good Chris. I've taught you well." },
    { name: "Joe Swanson", time: "27 seconds ago", message: "You didn't get ice cream?" },
    { name: "Meg Griffin", time: "Dec 7, 2022", message: "Good Chris. I've taught you well." },
    { name: "Joe Swanson", time: "27 seconds ago", message: "You didn't get ice cream?" },
    { name: "Meg Griffin", time: "Dec 7, 2022", message: "Good Chris. I've taught you well." },
    { name: "Joe Swanson", time: "27 seconds ago", message: "You didn't get ice cream?" },
    { name: "Meg Griffin", time: "Dec 7, 2022", message: "Good Chris. I've taught you well." },
    { name: "Joe Swanson", time: "27 seconds ago", message: "You didn't get ice cream?" },
    { name: "Meg Griffin", time: "Dec 7, 2022", message: "Good Chris. I've taught you well." },
    { name: "Joe Swanson", time: "27 seconds ago", message: "You didn't get ice cream?" },
    { name: "Meg Griffin", time: "Dec 7, 2022", message: "Good Chris. I've taught you well." },
  ];

  return (
    <div className="w-1/3 min-w-[250px] max-w-[400px] border-r h-full overflow-y-auto bg-white">
      <h3 className="p-4 font-bold text-lg border-b sticky top-0 z-10 bg-white ">All Messages</h3>
      {messages.map((msg, idx) => (
        <UserCard key={idx} name={msg.name} time={msg.time} messagePreview={msg.message} />
      ))}
    </div>
  );
};

export default MessageList;
