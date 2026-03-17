import React from "react";
import "./Updates.css";

const updates = [
  {
    date: "Dec 15, 2024",
    label: "NEW",
    title: "Ph.D. Entrance Exam 2025 Applications Open",
    tag: "Admission",
    accent: "red",
  },
  {
    date: "Dec 12, 2024",
    label: "NEW",
    title: "Semester End Examinations Schedule Released",
    tag: "Exam",
    accent: "red",
  },
  {
    date: "Dec 10, 2024",
    title: "Winter Break Notification for All Departments",
    tag: "Notice",
    accent: "blue",
  },
  {
    date: "Dec 08, 2024",
    title: "Guest Lecture by CEO of TechMahindra - Reg Open",
    tag: "Event",
    accent: "blue",
  },
  {
    date: "Dec 05, 2024",
    title: "Library Hours Extended for Exam Preparation",
    tag: "Facility",
    accent: "blue",
  },
];

const stats = [
  { value: "95%", label: "Placement Rate", tone: "blue" },
  { value: "54L", label: "Highest Package", tone: "yellow" },
  { value: "2500+", label: "Research Papers", tone: "purple" },
  { value: "300+", label: "Recruiters", tone: "green" },
];

const recruiters = [
  "TCS",
  "Wipro",
  "HCL",
  "IBM",
  "Accenture",
  "Deloitte",
  "Capgemini",
  "Cognizant",
  "Tech Mahindra",
];

export default function UpdatesPage() {
  return (
    <section className="updates">
      <div className="updates__inner">
        {/* LEFT */}
        <div className="updates__timeline">
          <div className="updates__timeline-header">
            <div className="updates__bell">🔔</div>
            <div>
              <h2 className="updates__title">Latest Updates</h2>
              <p className="updates__subtitle">Stay informed with campus news</p>
            </div>
          </div>

          <ul className="updates__list">
            <div className="updates__line" />
            {updates.map((item) => (
              <li key={item.title} className="updates__item">
                <span className={`updates__dot updates__dot--${item.accent}`} />

                <div className="updates__date-row">
                  <span className="updates__date">{item.date.toUpperCase()}</span>
                  {item.label && (
                    <span className="updates__pill">{item.label}</span>
                  )}
                </div>

                <p className="updates__headline">{item.title}</p>
                <span className="updates__tag">{item.tag}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="updates__stats">
          <p className="updates__why">WHY CHOOSE US</p>
          <h3 className="updates__heading">
            Excellence in <br />
            <span className="updates__highlight">Every Number</span>
          </h3>
          <p className="updates__copy">
            Our commitment to quality education reflects in our achievements.
            Join a community that strives for greatness.
          </p>

          <div className="updates__cards">
            {stats.map((item) => (
              <div key={item.label} className={`updates__card updates__card--${item.tone}`}>
                <div className="updates__card-value">{item.value}</div>
                <div className="updates__card-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RECRUITERS */}
      <footer className="recruiters">
        <div className="recruiters__title">Our Top Recruiters</div>
        <div className="recruiters__list">
          {recruiters.map((name) => (
            <span key={name} className="recruiters__item">{name}</span>
          ))}
        </div>
      </footer>
    </section>
  );
}
