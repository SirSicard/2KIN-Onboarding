import React from 'react';
import "../styles/docsPage.css"

function DocumentationPage() {
  return (
    <div>
      <h1>2Kin Documentation</h1>
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="card-container">
        <div className="card">Kategori</div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card">Kategori</div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
}

export default DocumentationPage;