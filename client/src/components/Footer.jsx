import { Link } from "react-router-dom";  
import "../styles/footer.css" 
function Footer() {
    return (
        <footer>
        <div className="footerContent">
            <div className="footerTop">
                <div className="footerLeft">
                    <Link>Shop</Link>
                    <Link>Docs</Link>
                    <Link>Apps</Link>
                </div>
                <h2>2Kin</h2>
                <div className="footerRight">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="instagram" ></img>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="facebook"></img>
                    <img src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-official-vector-download_691560-10797.jpg" alt="x"></img>
                </div>
            </div>
            <hr/>
            <br/>
            <h3>Nodehill © 2024</h3>
            </div>
        </footer>
    )
}

export default Footer;