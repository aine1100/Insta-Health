import React from "react";
import Sidebar from "./sidebar";
import Header from "./Header";
import PatientSummaryCard from "./PatientSummaryCard";
import PatientList from "./patient-list";

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "1rem" }}>
        <Header />
        <div
          className="justify-content-between"
          style={{ display: "flex", justifyContent: "", margin: "1rem 0" }}
        >
          <PatientSummaryCard count={500} label="Total Patients" color="blue" />
          <PatientSummaryCard
            count={50}
            label="Treated Patients"
            color="green"
          />
          <PatientSummaryCard count={50} label="Sick Patients" color="red" />
        </div>
        <PatientList />
      </div>
    </div>
  );
};

export default Dashboard;
