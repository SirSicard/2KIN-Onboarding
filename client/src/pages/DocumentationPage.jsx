import React from 'react';
import "../styles/docsPage.css";

// Mockdata för korten
const mockData = [
  { title: "Kategori 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Kategori 2", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Kategori 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { title: "Kategori 4", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { title: "Kategori 5", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  // Lägg till fler mockdata här vid behov
];

function DocumentationPage() {
  return (
    <div>
      <h1>2Kin Documentation</h1>
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="card-container">
        {mockData.map((item, index) => (
          <div key={index} className="card">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocumentationPage;
