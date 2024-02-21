import { Link } from "react-router-dom";

import '../styles/hero-section.css'

function HeroSection() {
  return (
    <div className="hero-image">
        <h1 className="hero-title">2KIN</h1>
        <p className="hero-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut!
        </p>
        <Link to="/" className="hero-buy"><button>BUY NOW</button></Link>
    </div>
  );
}

export default HeroSection;