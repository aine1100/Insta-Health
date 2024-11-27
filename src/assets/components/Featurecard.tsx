import React from 'react';


interface FeatureCardProps {
  icon: string; 
  title: string;
  description: string; 
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="col-md-3">
      <div className="card h-100 p-4 shadow feature-card">
        <img
          src={icon}
          alt="Feature Icon"
          className="circular-image"
          style={{ width: "80px", height: "80px", margin: "auto" }}
        />
        <h3 className="mt-3 fw-bold">{title}</h3>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
