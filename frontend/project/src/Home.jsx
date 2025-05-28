import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'
import Footer from './Footer'

const cardVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 },
  },
}

const Home = () => {
  const navigate = useNavigate()

  const verify = () => {
    const da = localStorage.getItem('login')
    if (da !== 'true') {
      alert('Please login to continue...')
      navigate('/login')
    } else {
      navigate('/courses')
    }
  }

  const cards = [
    {
      title: 'Full Stack Web Developer',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      salary: '$127,005 average salary (US)',
      roles: '16,500 roles (US)',
      rating: 4.7,
      reviews: '442K Ratings',
      hours: '87.6 Total Hours',
    },
    {
      title: 'Digital Marketer',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      salary: '$61,126 average salary (US)',
      roles: '36,600 roles (US)',
      rating: 4.6,
      reviews: '3.3K Ratings',
      hours: '28.4 Total Hours',
    },
    {
      title: 'Data Scientist',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      salary: '$126,629 average salary (US)',
      roles: '20,800 roles (US)',
      rating: 4.6,
      reviews: '216K Ratings',
      hours: '46.8 Total Hours',
    },
  ]

  return (
    <>
      {/* Introduction Section */}
      <motion.div
        className="home-intro"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Shape Your Future With Us</h1>
        <p>
          Welcome to <strong>SkillEdge Academy</strong>, your trusted companion in mastering
          in-demand skills and unlocking career opportunities. Whether you dream of becoming
          a Full Stack Developer, Data Scientist, or Digital Marketer, we've got you covered
          with real-world training, expert-curated content, and community support.
        </p>
        <p>
          Learn at your pace, earn industry-respected certifications, and take the next step
          toward a fulfilling and future-proof career.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="card-cont">
        {cards.map((card, index) => (
          <motion.div
            className="card-container"
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 12px 25px rgba(0,0,0,0.35)' }}
          >
            <div className="card custom-card">
              <img src={card.image} alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">
                  {card.salary} • {card.roles}
                </p>
                <div className="incard">
                  <p className="cardfoot">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>{' '}
                    {card.rating}
                  </p>
                  <p className="cardfoot">{card.reviews}</p>
                  <p className="cardfoot">{card.hours}</p>
                </div>
                <button onClick={verify} className="card-button">
                  Explore
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Outro Section */}
      <motion.div
        className="home-outro"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
      >
        <h2>Why Choose Us?</h2>
        <ul>
          <li> Industry-vetted curriculum curated by professionals</li>
          <li> Hands-on projects to build a real-world portfolio</li>
          <li> Career support, resume tips, and interview guidance</li>
          <li> Learn anytime, anywhere – your growth, your way</li>
        </ul>
        <p>
          Join thousands of learners who’ve transformed their careers with us. Your journey to success
          starts here. Let’s build the future, one skill at a time!
        </p>
      </motion.div>

      <Footer />
    </>
  )
}

export default Home
