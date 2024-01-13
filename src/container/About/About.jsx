import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss'

/* the About component */
const About = () => {
const [abouts, setAbouts] = useState([]);

useEffect(() => {
  const query = '*[_type == "abouts"]';

  client.fetch(query).then((data) => {
    setAbouts(data);
  });
}, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Dev</span> <br /> means <span>Good Business</span>
      </h2>

      {/* mapping over the abouts array and rendering each item */}
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }} // animation when in view
            whileHover={{ scale: 1.1 }} // animation when hovered
            transition={{ duration: 0.5, type: 'tween' }} // transition duration and type
            className="app__profile-item"
            key={about.title + index} // unique key for each item
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} /> {/* rendering the image */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2> {/* rendering the title */}
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p> {/* rendering the description */}
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap (About, 'app__about'),
    'about',
    "app__whitebg"
    );