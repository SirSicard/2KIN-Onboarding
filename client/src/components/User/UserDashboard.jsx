import React from 'react';
import '../../styles/user-dashboard.css';
import { NavLink, Outlet } from 'react-router-dom';

export default function UserDashboard() {
  return (
    <div className="container-dashboard">
      <div className="dashboard">
        <ul className="dashboard-ul">
          <li className="dashboard-item">
            <NavLink to="/user/add-product" activeclassname="active">
              Products
            </NavLink>
          </li>
          <li className="dashboard-item">
            <NavLink to="/user/shop-history" activeclassname="active">
              Shop History
            </NavLink>
          </li>
          <li className="dashboard-item">
            <NavLink to="/user/profile" activeclassname="active">
              Profile
            </NavLink>
          </li>
          <li className="dashboard-item">
            <NavLink to="/user/billing" activeclassname="active">
              Billing
            </NavLink>
          </li>
        </ul>
      </div>
        <div className="dashboard-content">
          <Outlet />
        </div>
    </div>
  );
}

