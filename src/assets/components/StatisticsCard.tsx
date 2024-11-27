import React from 'react';
import './StatisticsCard.css';

const StatisticsCard: React.FC = () => {
  return (
    <div className="statistics-card card">
      <div className="card-body">
        <h5 className="card-title">Weekly Statistics</h5>
        <div className="statistic">
          <p>
            <strong>180+ Increase</strong> (+10% compared to last week)
          </p>
          <div className="graph-placeholder text-center">
            <strong>Graph Component Placeholder</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
