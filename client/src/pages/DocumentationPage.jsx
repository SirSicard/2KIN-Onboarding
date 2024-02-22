import React from 'react';
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom
import "../styles/docsPage.css";

export const mockData = [
  { id: 1, title: "Kategori 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, title: "Kategori 2", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 3, title: "Kategori 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { id: 4, title: "Kategori 4", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { id: 5, title: "Kategori 5", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
];

function DocumentationPage() {
  return (
    <div>
      <h1>2Kin Documentation</h1>
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="card-container">
        {mockData.map((item) => (
          <Link key={item.id} to={`/docs/${item.id}`} className="card-link">
            <div className="card">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DocumentationPage;
