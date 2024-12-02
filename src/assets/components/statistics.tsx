import React from "react";
import "./statistics.css"; // Make sure your styles are imported

const Statistics: React.FC = () => {
  return (
    <div className="statistics">
      <h5>Consultation Numbers Statistics</h5>
      <div className="stats-info">
        <div className="text-center me-4">
          <h4>200 people</h4>
          <p className="text-muted small">Video call</p>
        </div>
        {/* Replace with actual graph */}
        <img
          src="path-to-graph-image"  // Add correct image path here
          alt="Graph"
          className="stats-graph"
        />
      </div>
    </div>
  );
};

export default Statistics;
