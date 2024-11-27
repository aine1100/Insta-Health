import React from 'react';
import './PatientSummaryCard.css';

interface PatientSummaryCardProps {
  count: number;
  label: string;
  color: 'blue' | 'green' | 'red';
}

const PatientSummaryCard: React.FC<PatientSummaryCardProps> = ({ count, label, color }) => {
  return (
    <div className={`card bg-${color}`}>
      <h2 className="card-title">{count}</h2>
      <p className="card-text">{label}</p>
    </div>
  );
};

export default PatientSummaryCard;
