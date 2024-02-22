import "../styles/appstorepage.css";
function AppstorePage() {
  const mockApps = [
    {
      id: 1,
      title: 'App 1',
      imageUrl: 'https://prod-printler-front-as.azurewebsites.net/media/photo/139010.jpg?mode=crop&width=727&height=1024&rnd=0.0.1',
      downloadLink: 'https://example.com/app1-download',
      pageLink: '/app1-page',
      isFeatured: true,
    },
    {
      id: 2,
      title: 'App 2',
      imageUrl: 'https://m.media-amazon.com/images/I/61KzGhwRP1L._UF1000,1000_QL80_.jpg',
      downloadLink: 'https://example.com/app2-download',
      pageLink: '/app2-page',
      isFeatured: false,
    },
    {
      id: 3,
      title: 'App 3',
      imageUrl: 'https://i.discogs.com/2mnUXEqJ9wEZSSla5nof_MaBdSHD0PEXS7LLoP_5Loo/rs:fit/g:sm/q:90/h:600/w:376/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1ODAw/MTMtMTU4NDkwNjQz/MC00ODY1LmpwZWc.jpeg',
      downloadLink: 'https://example.com/app3-download',
      pageLink: '/app3-page',
      isFeatured: true,
    },
    {
      id: 4,
      title: 'App 4',
      imageUrl: 'https://64.media.tumblr.com/7b5857b030a46ea8e27621d90b4bd11c/tumblr_mg0ztu5kCZ1rqh2k2o1_1280.jpg',
      downloadLink: 'https://example.com/app4-download',
      pageLink: '/app4-page',
      isFeatured: false,
    },
    {
      id: 5,
      title: 'App 5',
      imageUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/notorious-rapper-big-biggie-munil-garage.jpg',
      downloadLink: 'https://example.com/app5-download',
      pageLink: '/app5-page',
      isFeatured: true,
    },
    {
      id: 6,
      title: 'App 6',
      imageUrl: 'https://notafuckingblogger.files.wordpress.com/2011/04/11-2pac-1408071.jpg',
      downloadLink: 'https://example.com/app6-download',
      pageLink: '/app6-page',
      isFeatured: false,
    },
    {
      id: 7,
      title: 'App 7',
      imageUrl: 'https://www.billboard.com/wp-content/uploads/media/Travis-in-jersey-front-billboard-1548.jpg',
      downloadLink: 'https://example.com/app7-download',
      pageLink: '/app7-page',
      isFeatured: true,
    },
    {
      id: 8,
      title: 'App 8',
      imageUrl: 'https://static.displate.com/857x1200/displate/2019-12-30/65cf019c5f9fb6e103033a7e24fcfb4a_fbc634a99a9f6db1ec4d93a760e815ec.jpg',
      downloadLink: 'https://example.com/app8-download',
      pageLink: '/app8-page',
      isFeatured: true,
    },
    {
      id: 9,
      title: 'App 9',
      imageUrl: 'https://render.fineartamerica.com/images/rendered/default/poster/7/8/break/images/artworkimages/medium/3/eminem-king-of-warren-mi-2021-john-farr.jpg',
      downloadLink: 'https://example.com/app9-download',
      pageLink: '/app9-page',
      isFeatured: false,
    },
  ];

  const featuredApps = mockApps
    .filter((app) => app.isFeatured)
    .map((app) => (
      <div key={`featured-app-${app.id}`} className="featured-apps-card">
        <img src={app.imageUrl} alt={`App ${app.id}`} />
      </div>
    ));

    const browseApps = mockApps.map((app, index) => (
      <div key={`browse-app-${app.id}`} className="browse-apps-card">
        <img src={app.imageUrl} alt={`App ${app.id}`} />
      </div>
    ));

  return (
    <>
    <div id="appstore-container">
      <h1 className="appstore-titles">App store</h1>
      <div className="search-container">
        <input
          type="search"
          id="search"
          placeholder="Enter your search query"
          className="search-input"
        />
        <input type="submit" value="Search" className="search-button" />
      </div>
      <h1 className="appstore-titles">Featured Apps</h1>
      <div id="featured-apps-container">{featuredApps}</div>
      <h1 className="appstore-titles">Browse apps</h1>
      <div id="browse-apps-container">{browseApps}</div>
    </div>
    </>
  );
}

export default AppstorePage;
