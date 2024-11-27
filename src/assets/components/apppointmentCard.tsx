import React from "react";
import "./appointmentcard.css";
import { useNavigate } from "react-router-dom";

interface AppointmentCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  name,
  title,
  description,
  imageUrl,
}) => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/userprofile");
  };
  return (
    <div className="appointment-card">
      <div className="card-header">
        <img src={imageUrl} alt={name} className="profile-image" />
        <div className="profile-info">
          <h3 className="name">{name}</h3>
          <span className="options">⋮</span>
        </div>
      </div>
      <h4 className="title">{title}</h4>
      <p className="description">{description}</p>
      <button className="read-more-btn" onClick={handleReadMoreClick}>
        Read more
      </button>
    </div>
  );
};

export default AppointmentCard;
