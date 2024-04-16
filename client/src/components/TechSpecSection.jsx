import "../styles/techspec.css";
import { motion } from 'framer-motion';

function TechSpecSection() {
  return (
    <div className="tech-section">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Technical Specifications</motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
        viewport={{
          once: false,
          amount: 0.0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        className="tech-container "
      >
        <div className="text-left grid_1">
          <h3>tech spec</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/600x425"
          alt="placeholder"
          className="img-right grid_img_1"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
        viewport={{
          once: false,
          amount: 0.0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        className="tech-container"
      >
        <div className="text-right grid_2">
          <h3>tech spec</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque
            rerum! Provident similique accusantium nemo autem.
          </p>
        </div>

        <img
          src="https://via.placeholder.com/600x425"
          alt="placeholder"
          className="img-left  grid_img_2"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
        viewport={{
          once: false,
          amount: 0.0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        className="tech-container"
      >
        <div className="text-left grid_3">
          <h3>tech spec</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque
            rerum! Provident similique accusantium nemo autem. 
          </p>
        </div>
        <img
          src="https://via.placeholder.com/600x425"
          alt="placeholder"
          className="img-right grid_img_3"
        />
      </motion.div>
    </div>
  );
}

export default TechSpecSection;
