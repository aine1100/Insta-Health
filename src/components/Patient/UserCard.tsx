import React from "react";
import { profile } from "../../utils/Image";

type UserCardProps = {
  name: string;
  time: string;
  messagePreview: string;
};

const UserCard: React.FC<UserCardProps> = ({ name, time, messagePreview }) => {
  return (
    <div className="flex justify-between items-center p-3 hover:bg-cyan-50 cursor-pointer">
      <div className="flex items-center gap-3">
        <img src={profile} alt="profile" className="w-[50px] rounded-full" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{messagePreview}</p>
        </div>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
};

export default UserCard;
