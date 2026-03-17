import './WhyChoose.css'

function WhyChoose() {
  return (
    <section className="whychoose">
      <div className="whychoose__header">
        <h2>Why Choose Sanskriti?</h2>
        <p>
          Focus on holistic development, global exposure, and industry-aligned curriculum makes us
          the preferred choice.
        </p>
      </div>

      <div className="whychoose__grid">
        <div className="whychoose__card whychoose__card--reasons">
          <h3>Top Reasons To Join SU</h3>
          <ul>
            <li>
              <span className="whychoose__bullet">✔</span>
              World-class Infrastructure
            </li>
            <li>
              <span className="whychoose__bullet">✔</span>
              Highly Qualified Faculty
            </li>
            <li>
              <span className="whychoose__bullet">✔</span>
              Industry Oriented Curriculum
            </li>
            <li>
              <span className="whychoose__bullet">✔</span>
              Excellent Placement Record
            </li>
            <li>
              <span className="whychoose__bullet">✔</span>
              Focus on Innovation & Research
            </li>
          </ul>
          <button className="whychoose__btn">Download Brochure</button>
        </div>

        <div className="whychoose__card whychoose__card--info">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
            alt="Students collaborating"
            className="whychoose__image"
          />
          <div className="whychoose__info-row">
            <span className="whychoose__icon whychoose__icon--blue">🔗</span>
            <div>
              <div className="whychoose__info-title">30+ International Ties</div>
              <div className="whychoose__info-sub">
                Collaborations with foreign universities for student exchange programs.
              </div>
            </div>
          </div>
        </div>

        <div className="whychoose__card whychoose__card--info">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80"
            alt="Interactive pedagogy"
            className="whychoose__image"
          />
          <div className="whychoose__info-row">
            <span className="whychoose__icon whychoose__icon--yellow">💡</span>
            <div>
              <div className="whychoose__info-title">Interactive Pedagogy</div>
              <div className="whychoose__info-sub">
                Project-based learning and case studies for practical understanding.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
