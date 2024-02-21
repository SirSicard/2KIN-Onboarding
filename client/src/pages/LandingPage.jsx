import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>2KIN</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut!
      </p>
      <Link to="/"><button>BUY NOW</button></Link>
    </div>
  );
}

export default LandingPage;
