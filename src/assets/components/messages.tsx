import React from "react";
import Sidebar from "./sidebar"; 
import Header from "./Header";   
import { FaPaperPlane, FaEllipsisV , FaSmile, FaMicrophone} from "react-icons/fa";
import "./messages.css";

const Messages: React.FC = () => {
  return (
    <div className="d-flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Header Component */}
        <Header />

        {/* Messages Page */}
        <div className="col-md-10 main-content">
        <div className="container-fluid messages-page p-4">
          <div className="row">
            {/* Messages Sidebar */}
            <div className="col-md-3 messages-sidebar bg-light rounded">
              <h6 className="mt-3">Messages</h6>
              <div className="message-category py-2 px-3 bg-primary text-white rounded">
                <div className="d-flex justify-content-between align-items-center">
                  <span>All messages</span>
                  <span className="badge bg-white text-primary">3</span>
                </div>
              </div>
              <div className="message-list mt-3">
                <div className="message-item d-flex align-items-center p-2">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="rounded-circle me-2"
                  />
                  <div>
                    <h6 className="m-0">Joe Swanson</h6>
                    <p className="text-muted small m-0">You didn’t get any ice cream?</p>
                  </div>
                </div>
                <div className="message-item d-flex align-items-center p-2">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="rounded-circle me-2"
                  />
                  <div>
                    <h6 className="m-0">Meg Griffin</h6>
                    <p className="text-muted small m-0">Good Chris. I've taught you well...</p>
                  </div>
                </div>
                <div className="message-item d-flex align-items-center p-2">
                    <img 
                    src="https://via.placeholder.com/40"
                    alt='User'
                    className="rounded-circle me-2"
                    />
                    <div>
                        <h6 className="m-0">Meg Griffin</h6>
                        <p className="text-muted small m-0"> Good Chirs. I've taught you well...</p>
                    </div>

                </div>
                <div className="message-item d-flex align-items-center p-2">
                    <img 
                    src="https://via.placeholder.com/40"
                    alt='User'
                    className="rounded-circle me-2"
                    />
                    <div>
                        <h6 className="m-0">Meg Griffin</h6>
                        <p className="text-muted small m-0"> Good Chirs. I've taught you well...</p>
                    </div>
                    </div>
                    <div className="message-item d-flex align-items-center p-2">
                    <img 
                    src="https://via.placeholder.com/40"
                    alt='User'
                    className="rounded-circle me-2"
                    />
                    <div>
                        <h6 className="m-0">Meg Griffin</h6>
                        <p className="text-muted small m-0"> Good Chirs. I've taught you well...</p>
                    </div>
                    </div>
                    <div className="message-item d-flex align-items-center p-2">
                    <img 
                    src="https://via.placeholder.com/40"
                    alt='User'
                    className="rounded-circle me-2"
                    />
                    <div>
                        <h6 className="m-0">Meg Griffin</h6>
                        <p className="text-muted small m-0"> Good Chirs. I've taught you well...</p>
                    </div>
                    </div>
                    <div className="message-item d-flex align-items-center p-2">
                    <img 
                    src="https://via.placeholder.com/40"
                    alt='User'
                    className="rounded-circle me-2"
                    />
                    <div>
                        <h6 className="m-0">Meg Griffin</h6>
                        <p className="text-muted small m-0"> Good Chirs. I've taught you well...</p>
                    </div>
                    </div>
                    <div className="message-item d-flex align-items-center p-2">
                    <img 
                    src="https://via.placeholder.com/40"
                    alt='User'
                    className="rounded-circle me-2"
                    />
                    <div>
                        <h6 className="m-0">Meg Griffin</h6>
                        <p className="text-muted small m-0"> Good Chirs. I've taught you well...</p>
                    </div>
                    </div>
                    <div className="message-item d-flex align-items-center p-2">
                    <img 
                    src="https://via.placeholder.com/40"
                    alt='User'
                    className="rounded-circle me-2"
                    />
                    <div>
                        <h6 className="m-0">Meg Griffin</h6>
                        <p className="text-muted small m-0"> Good Chirs. I've taught you well...</p>
                    </div>
                    </div>
                    <div className="message-item d-flex align-items-center p-2">
                    <img 
                    src="https://via.placeholder.com/40"
                    alt='User'
                    className="rounded-circle me-2"
                    />
                    <div>
                        <h6 className="m-0">Meg Griffin</h6>
                        <p className="text-muted small m-0"> Good Chirs. I've taught you well...</p>
                    </div>
                    </div>

              </div>
            </div>
            

            {/* Chat Section */}
            <div className="col-md-9 chat-section">
              <div className="chat-header d-flex justify-content-between align-items-center p-3 bg-white shadow-sm rounded">
                <div className="d-flex align-items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="rounded-circle me-2"
                  />
                  <div>
                    <h6 className="m-0">Joe Swanson</h6>
                    <small className="text-muted">Doctor at King Faisal Hospital</small>
                  </div>
                </div>
                <FaEllipsisV />
              </div>
              <div className="chat-messages p-3 bg-light rounded mt-3">
                <div className="message received p-3 rounded bg-white mb-3">
                  Hey Mike, are you eager to talk to Joe?
                </div>
                <div className="message sent p-3 rounded bg-primary text-white mb-3">
                  So...question. How long has Stewie been unconscious?
                </div>
                <div className="message received p-3 rounded bg-white mb-3">
                  Oh my god, Chris. He knows. Dad, I’m so sorry we should have told someone...
                </div>
                <div className="message sent p-3 rounded bg-primary text-white mb-3">
                  Good Chris. I've taught you well. You have the right instincts...
                </div>
              </div>
              <div className="message-input d-flex align-items-center p-3 bg-light shadow-sm rounded">
      {/* Microphone Icon */}
      <button className="btn btn-outline-secondary me-2">
        <FaMicrophone />
      </button>

      {/* Input Field */}
      <input
        type="text"
        className="form-control me-2"
        placeholder="What would you like to say?"
      />

      {/* Emoji Icon */}
      <button className="btn btn-outline-secondary me-2">
        <FaSmile />
      </button>

      {/* Send Button */}
      <button className="btn btn-primary">
        <FaPaperPlane />
      </button>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Messages;
