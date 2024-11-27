import React from "react";
import Sidebar from "./sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";
import PatientList from "./PatientList";
import Appointments from "./appointments";
import Calendar from "./calendar";

const DashboardLayout: React.FC = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <main className="dashboard-main">
          <Outlet />
          <PatientList></PatientList>
          
           
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
