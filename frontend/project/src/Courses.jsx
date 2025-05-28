import React from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";

const coursesData = [
  {
    id: 1,
    title: "Python Programming",
    description: "Learn Python from basics to advanced concepts with hands-on projects.",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    description: "Master JavaScript fundamentals for dynamic web development.",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    id: 3,
    title: "Cloud Computing",
    description: "Understand cloud concepts and deploy scalable applications.",
    img: "https://euro-systems.co.uk/wp-content/uploads/2024/09/Cloud-Computing-History-1.png",
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    description: "Explore AI fundamentals, neural networks, and intelligent agents.",
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712104.png",
  },
  {
    id: 5,
    title: "Machine Learning",
    description: "Build predictive models using real-world data and ML techniques.",
    img: "https://cdn-icons-png.flaticon.com/512/4149/4149653.png",
  },
  {
    id: 6,
    title: "Data Science",
    description: "Gain insights from data using Python, statistics, and visualization tools.",
    img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  },
  {
    id: 7,
    title: "Full Stack Web Development",
    description: "Become a full-stack dev with HTML, CSS, JS, Node.js, and MongoDB.",
    img: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
  },
  {
    id: 8,
    title: "Cybersecurity Fundamentals",
    description: "Protect systems, data, and networks against digital threats.",
    img: "https://cdn-icons-png.flaticon.com/512/3524/3524659.png",
  },
];

const Courses = () => {
  const navigate=useNavigate()
  const verify = () => {
      const da = localStorage.getItem('login')
      if (da !== 'true') {
        alert('Please login to continue...')
        navigate('/login')
      } else {
        navigate('/buy')
      }
  }
  return (
    <div className="courses-container">
      <div className="courses-intro">
        <h1>Empower Your Future with Our Career-Driven Courses</h1>
        <p>
          Whether you're starting from scratch or leveling up your skills, our
          curated selection of courses will prepare you for high-paying, in-demand
          careers in tech. Learn from industry experts and build real-world
          projects that make your resume shine. 🚀
        </p>
      </div>

      <div className="courses-grid">
        {coursesData.map(({ id, title, description, img }) => (
          <div key={id} className="course-card">
            <div className="image-wrapper">
              <img src={img} alt={title} className="course-image" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={verify} className="enroll-btn">
                  Enroll Now
                </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
