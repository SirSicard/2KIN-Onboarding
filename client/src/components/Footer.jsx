import { Link } from "react-router-dom";
import "../styles/footer.css";
function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <div className="footerTop">
          <div className="footerLeft">
            <Link to={"/shop"}>Shop</Link>
            <Link to="/docs">Docs</Link>
            <Link to={"/apps"}>Apps</Link>
          </div>
          <h2 id="footer-title">2Kin</h2>
          <div className="footerRight">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
              alt="instagram"
            ></img>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
              alt="facebook"
            ></img>
            <img
              src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-official-vector-download_691560-10797.jpg"
              alt="x"
            ></img>
          </div>
        </div>
        <div id="footer-bottom-wrapper">
          <hr />
          <br />
          <h3 id="footer-copyright">Nodehill © 2024</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
