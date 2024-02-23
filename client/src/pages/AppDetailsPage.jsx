import React from "react";
import { useParams } from "react-router-dom";
import { mockApps } from "./AppstorePage";
import "../styles/appdetailspage.css";

function AppDetailsPage() {
  const { id } = useParams();
  const appDetails = mockApps.find((app) => app.id === parseInt(id));

  return (
    <>
      <div id="appdetails-container">
        <div id="appdetails-image-wrapper">
          <img
            id="appdetails-image"
            src={appDetails.imageUrl}
            alt="Pretty picture"
          />
        </div>
        <div id="appdetails-text-container">
          <h1 id="appdetails-title">{appDetails.title}</h1>
          <button id="appdetails-download-button">Download</button>
          <form id="appdetails-description">{appDetails.description}</form>
        </div>
      </div>
    </>
  );
}
export default AppDetailsPage;
