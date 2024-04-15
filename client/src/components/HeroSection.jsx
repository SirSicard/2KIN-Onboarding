import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

import '../styles/hero-section.css'

function HeroSection() {
  return (
    <div className="hero-image">
      {/* <h1 className="hero-title">2KIN</h1> */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
        whileInView={{ scale: 1.1, opacity: 1, y: 0 }}
        className="hero-title"
      >
        The best place to buy your favorite products
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false, amount: 0.5 }}
        whileInView={{ opacity: 0.9, y: 0 }}
        className="hero-description"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: false, amount: .5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="hero-image-overlay"
      >
        <Link to="/shop" className="hero-buy">
          <button>BUY NOW</button>
        </Link>
      </motion.div>
    </div>
  );
}

export default HeroSection;