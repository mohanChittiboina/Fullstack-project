import React from 'react';
import './App.css';
import './Footer.css'

const UdemyFooter = () => {
  const sections = [
    {
      title: "In-demand Careers",
      items: [
        "Data Scientist",
        "Full Stack Web Developer",
        "Cloud Engineer",
        "Project Manager",
        "Game Developer",
        "See all Career Accelerators",
      ],
    },
    {
      title: "Web Development",
      items: ["JavaScript", "React JS", "Angular", "Java"],
    },
    {
      title: "IT Certifications",
      items: [
        "Amazon AWS",
        "AWS Certified Cloud Practitioner",
        "AZ-900: Microsoft Azure Fundamentals",
        "AWS Certified Solutions Architect - Associate",
        "Kubernetes",
      ],
    },
    {
      title: "Leadership",
      items: [
        "Management Skills",
        "Project Management",
        "Personal Productivity",
        "Emotional Intelligence",
      ],
    },
    {
      title: "Certifications by Skill",
      items: [
        "Cybersecurity Certification",
        "Project Management Certification",
        "Cloud Certification",
        "Data Analytics Certification",
        "HR Management Certification",
      ],
    },
    {
      title: "Data Science",
      items: ["Python", "Machine Learning", "ChatGPT", "Deep Learning"],
    },
    {
      title: "Communication",
      items: [
        "Communication Skills",
        "Presentation Skills",
        "Public Speaking",
        "Writing",
        "PowerPoint",
      ],
    },
    {
      title: "Business Analytics & Intelligence",
      items: [
        "Microsoft Excel",
        "SQL",
        "Microsoft Power BI",
        "Data Analysis",
        "Business Analysis",
      ],
    },
    {
      title: "About",
      items: ["About us", "Careers", "Contact us", "Blog", "Investors"],
    },
    {
      title: "Discover SkillEdge Academy",
      items: [
        "Get the app",
        "Teach on Udemy",
        "Plans and Pricing",
        "Affiliate",
        "Help and Support",
      ],
    },
    {
      title: "SkillEdge Academy for Business",
      items: ["SkillEdge Academy Business"],
    },
    {
      title: "Legal & Accessibility",
      items: [
        "Accessibility statement",
        "Privacy policy",
        "Sitemap",
        "Terms",
      ],
    },
  ];

  // Grouping into chunks of 4
  const groupedSections = [];
  for (let i = 0; i < sections.length; i += 4) {
    groupedSections.push(sections.slice(i, i + 4));
  }

  return (
    <footer className="udemy-footer">
      <div className="footer-companies">
        <h2>Top companies choose SkillEdge Academy Business to build in-demand career skills.</h2>
        <div className="company-tags">
          <span><img src="nas.svg" alt="" /></span>
          <span><img src="volks.svg" alt="" /></span>
          <span><img src="net.svg" alt="" /></span>
          <span><img src="event.svg" alt="" /></span>
        </div>
      </div>

      {groupedSections.map((group, index) => (
        <div className="footer-row" key={index}>
          {group.map((section, idx) => (
            <div className="footer-column" key={idx}>
              <h4>{section.title}</h4>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mohan Learning Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default UdemyFooter;
