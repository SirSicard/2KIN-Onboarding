import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import "../styles/docsPage.css";

export const mockData = [
  { id: 1, title: "Kategori 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, title: "Kategori 2", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 3, title: "Kategori 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { id: 4, title: "Kategori 4", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { id: 5, title: "Kategori 5", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { id: 6, title: "Kategori 6", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptate autem vero aspernatur, veniam, Provident porro doloremque laudantium sint maiores deleniti iure, voluptates iusto vero." },
];

function DocumentationPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = mockData.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  useEffect(() => {
    handleSearch(); // Uppdatera sökresultaten när komponenten laddas för första gången
  }, []); // Använd en tom beroendelista för att köra effekten en gång vid start

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div className='docsOverview'>
      <div className='header'>
        <div className='header-content'>
          <h3 className='docs-title'>2Kin Documentation</h3>
          <p className='subtitle'>Type something interesting here</p>
        </div>
        <img src="https://cryptologos.cc/logos/uniswap-uni-logo.png" alt="Logo" className="docs-logo" />
      </div>
      <div className="docs-search-container">
        <input
          type="text"
          id="docs-search"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button type="button" className="docs-search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="card-container">
        {searchResults.map((item) => (
          <Link key={item.id} to={`/docs/${item.id}`} className="card-link">
            <div className="card">
              <h2 className='card-title'>{item.title}</h2>
              <p className='card-content'>{item.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DocumentationPage;
