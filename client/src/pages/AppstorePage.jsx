import "../styles/appstorepage.css"
function AppstorePage() {
    return(
        <div className="search-container">
        <input
          type="search"
          id="search"
          placeholder="Enter your search query"
          className="search-input"
        />
        <input
          type="submit"
          value="Search"
          className="search-button"
        />
      </div>
    );
}

export default AppstorePage