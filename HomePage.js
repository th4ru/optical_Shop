import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <button className="nav-button">Customer</button>
        <button className="nav-button">Bills</button>
        <button className="nav-button">Invoice</button>
        <button className="nav-button">Daily Report</button>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Customer List */}
        <div className="customer-list">
          <div className="customer-item">Customer 1</div>
          <div className="customer-item">Customer 2</div>
          <div className="customer-item">Customer 3</div>
          <div className="customer-item">Customer 4</div>
        </div>

        {/* Customer Form */}
        <div className="customer-form">
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search customers"
              className="search-input"
            />
            <button className="search-button">🔍</button>
          </div>

          {/* Form */}
          <form className="form">
            <div className="form-row">
              <input type="text" placeholder="Prefix" className="form-input" />
              <input
                type="text"
                placeholder="Given Name"
                className="form-input"
              />
            </div>

            <input
              type="text"
              placeholder="Family Name"
              className="form-input full-width"
            />

            <div className="form-row">
              <input
                type="text"
                placeholder="Age Years"
                className="form-input"
              />
              <input
                type="date"
                placeholder="Birth Date"
                className="form-input"
              />
            </div>

            <input
              type="text"
              placeholder="NIC / Passport No"
              className="form-input full-width"
            />

            <div className="form-row">
              <input type="text" placeholder="Gender" className="form-input" />
              <input
                type="text"
                placeholder="Nationality"
                className="form-input"
              />
            </div>

            <input
              type="text"
              placeholder="Phone No"
              className="form-input full-width"
            />
            <input
              type="text"
              placeholder="Address"
              className="form-input full-width"
            />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
