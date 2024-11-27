``
import React from 'react';

interface StatusBadgeProps {
  status: 'Sick' | 'Cured' | 'Pending';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getBadgeStyle = () => {
    switch (status) {
      case 'Sick':
        return 'bg-danger text-white';
      case 'Cured':
        return 'bg-success text-white';
      case 'Pending':
        return 'bg-secondary text-white';
      default:
        return 'bg-light text-dark';
    }
  };

  return (
    <span className={`badge ${getBadgeStyle()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
