import React from "react";
import Header from "./Header"; // Assuming you already have this
import Sidebar from "./sidebar"; // Assuming you already have this
import Banner from "./Banner";
import UpcomingConsultations from "./UpcomingConsultations";
import Statistics from "./statistics";
import Schedule from "./Schedule";

const ConsultationLayout: React.FC = () => {
  return (
    <div className="d-flex">
      <div style={{ width: "250px" }}>
        <Sidebar />
      </div>
      <main className="flex-grow-1 p-3">
        <Header />
        <Banner />
        <div className="row mt-4">
          <div className="col-md-8 d-flex">
            <div className="upcoming-consultations-container">
              <UpcomingConsultations />
            </div>
            <div className="statistics-container">
              <Statistics />
            </div>
          </div>
          <div className="col-md-4">
            <Schedule />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConsultationLayout;
