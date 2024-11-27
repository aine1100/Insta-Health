import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardOverview.css";
import Appointments from "./appointments";
import Calendar from "./calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMd,
  faCalendarCheck,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import doctorbg from '/doctor-removebg-preview 7.png';
import { MdArrowForward } from 'react-icons/md';

const DashboardOverview: React.FC = () => {
  return (
    <section className="dashboard-overview">
      <h2 className="dashboard-heading">Dashboard Overview</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="greeting-banner d-flex align-items-center justify-content-between p-4 rounded">
            <div>
              <h2>Hey Doctor John</h2>
              
                <p>Welcome back to Instahealth where you can now</p>
                <p>talk to your patients and monitor them</p>
              
              <button className="btn btn-primary mt-2">View more</button>
              
            </div>
            <img
              src={doctorbg}
              alt="Doctor"
              className="doctor-image"
            />{" "}
            
          </div>

          <div className="stats d-flex justify-content-between mt-4">
            <div className="stat-card red d-flex flex-column align-items-center p-3 rounded">
              <div className="icon-circle red">
                <FontAwesomeIcon icon={faUserMd} className="icon" />
              </div>
              <h3 className="card-title">500 Patients</h3>
            </div>
            <div className="stat-card blue d-flex flex-column align-items-center p-3 rounded">
              <div className="icon-circle blue">
                <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
              </div>
              <h3 className="card-title">100 Appointments</h3>
            </div>
            <div className="stat-card green d-flex flex-column align-items-center p-3 rounded">
              <div className="icon-circle green">
                <FontAwesomeIcon icon={faCommentAlt} className="icon" />
              </div>
              <h3 className="card-title">500 Messages</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="calendar-section p-3 rounded">
            {/* <h3>Calendar</h3>
            <p>Calendar placeholder</p>
             */}
             <Calendar></Calendar>
          </div>
          <div className="appointments-section p-3   mt-3 rounded">
            <Appointments></Appointments>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;
