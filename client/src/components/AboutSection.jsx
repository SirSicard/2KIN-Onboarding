import "../styles/about.css";
import { motion } from 'framer-motion';

function AboutSection() {
  return (
    <div className="about-container">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        whileInView={{ scale: 1.1, opacity: 1, y: 0 }}
        className="about-title"
      >
        About Us
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: false,
          amount: 0.0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        className="about-section"
      >
        <div className="text-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque
            rerum! Provident similique accusantium nemo autem.
          </p>
        </div>
        <motion.image
          initial={{ opacity: 0, y: 50 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            // ease: 'easeInOut',
            // type: 'tween',
          }}
          viewport={{
            once: false,
            amount: 0.0,
          }}
          whileInView={{ opacity: 0.8, y: 0 }}
          className="about-image"
        >
          <img src="https://via.placeholder.com/600x425" alt="placeholder" />
        </motion.image>
      </motion.div>
    </div>
  );
}

export default AboutSection;