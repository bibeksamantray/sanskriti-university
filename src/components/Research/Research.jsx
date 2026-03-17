import './Research.css'

const stats = [
  { icon: '📑', value: '2,500+', label: 'RESEARCH PAPERS' },
  { icon: '💡', value: '2,700+', label: 'PATENTS FILED' },
  { icon: '📘', value: '30+', label: 'BOOKS PUBLISHED' },
  { icon: '🌐', value: '12M+', label: 'RESEARCH GRANTS' },
]

function Research() {
  return (
    <section className="research">
      <div className="research__inner">
        <div className="research__header">
          <h2>
            Cutting Edge <span>Research.</span>
          </h2>
          <p>
            We push the boundaries of knowledge. Our interdisciplinary approach fosters collaboration
            between brilliant minds to solve global challenges.
          </p>
        </div>

        <div className="research__stats">
          {stats.map((item) => (
            <div key={item.label} className="research__stat">
              <div className="research__stat-icon" aria-hidden>
                {item.icon}
              </div>
              <div className="research__stat-value">{item.value}</div>
              <div className="research__stat-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="research__grid">
          <div className="research__card research__card--lg">
            <div className="research__card-icon" aria-hidden>
              🧠
            </div>
            <div className="research__card-title">Advanced AI & Robotics</div>
            <div className="research__card-text">
              Pioneering autonomous systems and machine learning algorithms.
            </div>
          </div>

          <div className="research__card research__card--sm research__card--bio">
            <div className="research__card-icon" aria-hidden>
              ✚
            </div>
            <div className="research__card-title">Bio-Genetics</div>
            <div className="research__card-text">
              Unlocking the secrets of life through genomic research.
            </div>
          </div>

          <div className="research__card research__card--sm research__card--quantum">
            <div className="research__card-icon" aria-hidden>
              ⎈
            </div>
            <div className="research__card-title">Quantum Computing</div>
            <div className="research__card-text">
              Next-gen processing power for complex problem solving.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
