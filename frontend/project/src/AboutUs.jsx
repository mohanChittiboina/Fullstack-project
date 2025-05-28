import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaProjectDiagram, FaUsers, FaAward } from "react-icons/fa";
import "./AboutUS.css";

const featureCards = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Instructors",
    desc: "Learn from industry professionals who’ve been there and done that.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Project-Based Learning",
    desc: "Work on real-world challenges to build your portfolio and confidence.",
  },
  {
    icon: <FaUsers />,
    title: "Vibrant Community",
    desc: "Join thousands of learners, collaborate and grow together.",
  },
  {
    icon: <FaAward />,
    title: "Recognized Certificates",
    desc: "Earn certificates that showcase your skills to potential employers.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Intro Section */}
      <motion.div
        className="about-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Us</h1>
        <p>Empowering Learners. Shaping Futures.</p>
        <p>
          Whether you’re starting fresh or leveling up, our platform gives you the tools,
          teachers, and community to build real-world skills and launch the career you’ve
          always dreamed of.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="features-grid"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {featureCards.map((card, idx) => (
          <motion.div
            className="feature-card"
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Deeper About Content */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2>Our Story</h2>
        <p>
          We started with a simple belief: education should empower every learner,
          everywhere. Today, we help thousands of students gain real skills,
          build strong portfolios, and land roles at top companies.
        </p>

        <h2>Our Mission</h2>
        <p>
          To deliver practical, hands-on learning experiences that bridge
          the gap between theory and the job market.
        </p>

        <h2>Why Join Us?</h2>
        <ul>
          <li>🔥 Learn by doing — not just watching</li>
          <li>🎯 Curriculum built for today’s tech demands</li>
          <li>🌐 Global community & mentor support</li>
          <li>🚀 Skills that get you hired</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AboutUs;
