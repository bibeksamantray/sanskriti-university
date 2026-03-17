import './HeroSection.css'

const companies = ['Google', 'Microsoft', 'Amazon', 'Tesla', 'NASA']

const toneMap = {
  yellow: {
    bg: '#fff3d7',
    border: '#e5cd95',
    dot: '#f4be2f',
  },
  blue: {
    bg: '#e8f1ff',
    border: '#c6d9ff',
    dot: '#2f7df4',
  },
  purple: {
    bg: '#f5f0ff',
    border: '#d8ceff',
    dot: '#a258ff',
  },
  pink: {
    bg: '#ffeef3',
    border: '#f6cedf',
    dot: '#ff5d8f',
  },
}

const stats = [
  { label: 'PATENTS FILED', value: '500+' },
  { label: 'PLACEMENT RATE', value: '98%' },
  { label: 'IN INNOVATION', value: '#1' },
]

const highlights = [
  {
    title: 'Rank 8th',
    subtitle: 'Top Higher Ed Institute in India',
    tone: 'yellow',
  },
  {
    title: 'Rank 1st',
    subtitle: 'Emerging Management Institute',
    tone: 'blue',
  },
  {
    title: 'AAA+',
    subtitle: 'Best B-School Rating 2023-24',
    tone: 'purple',
  },
  {
    title: 'Rank 3rd',
    subtitle: 'Among Pvt Universities in UP',
    tone: 'pink',
  },
]

const highlightIcons = {
  'Rank 8th': (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path
        d="M8 4h8v3a4 4 0 0 1-3 3.87V13h2a1 1 0 0 1 1 1v1H8v-1a1 1 0 0 1 1-1h2v-2.13A4 4 0 0 1 8 7V4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 5h3v2a3 3 0 0 1-3-3Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19 5h-3v2a3 3 0 0 0 3-3Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 19h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  'Rank 1st': (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path
        d="M7 20V9l5-3 5 3v11H7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9.5 14h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9.5 17h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 6.2V4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  'AAA+': (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path
        d="M7.5 17 12 5l4.5 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 14h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18 10.5h2M19 9.5v2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  'Rank 3rd': (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 5.5 13.9 9l3.6.5-2.6 2.6.6 3.7L12 14.9 8.5 15.8l.6-3.7L6.5 9.5l3.6-.5L12 5.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

function HeroSection() {
  return (
    <section className="hero-wrapper">
      <div className="hero-backdrop" aria-hidden></div>
      <div className="hero-shell">
        <section className="hero-stack">
          <div className="hero">
            <div className="hero__copy">
              <h1 className="hero__title">
                Crafting <span className="hero__title-highlight">Visionaries</span>
              </h1>
              <p className="hero__subtitle">
                An ecosystem of excellence where cutting-edge research meets creative freedom. Redefine what's possible with our interdisciplinary approach.
              </p>

              <div className="hero__stats">
                {stats.map((item) => (
                  <div key={item.label} className="hero__stat">
                    <div className="hero__stat-value">{item.value}</div>
                    <div className="hero__stat-label">{item.label}</div>
                  </div>
                ))}
              </div>

              <button className="hero__cta">View Programs</button>
            </div>

            <div className="hero__form-card">
              <div className="hero__form-top">
                <div className="hero__pill">
                  <span className="hero__pill-icon" aria-hidden>
                    ⚡
                  </span>
                  FAST TRACK
                </div>
                <span className="hero__version">APP-2025-V1</span>
              </div>

              <div className="hero__form">
                <h2 className="hero__form-title">Admissions Open 2025</h2>
                <p className="hero__form-subtitle">
                  Take the first step towards your career
                </p>

                <div className="hero__form-grid">
                  <input type="text" placeholder="Name *" />
                  <input type="tel" placeholder="Mobile *" />
                  <input type="email" placeholder="Email *" />
                  <select defaultValue="">
                    <option value="" disabled>
                      State *
                    </option>
                    <option>Delhi</option>
                    <option>Uttar Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                  </select>
                </div>

                <select className="hero__form-select" defaultValue="">
                  <option value="" disabled>
                    Select Program Interest *
                  </option>
                  <option>B.Tech</option>
                  <option>MBA</option>
                  <option>BBA</option>
                  <option>Pharmacy</option>
                </select>

                <button className="hero__form-submit">Register Now</button>
                <p className="hero__form-note">
                  By registering, you agree to receive communications from Sanskriti University.
                </p>
              </div>
            </div>
          </div>

          <section className="trusted">
            <div className="trusted__label">Trusted by industry leaders:</div>
            <div className="trusted__list">
              {companies.map((name) => (
                <span key={name} className="trusted__item">
                  {name}
                </span>
              ))}
            </div>
          </section>

          <section className="highlights">
            {highlights.map((item) => {
              const tone = toneMap[item.tone]
              const icon = highlightIcons[item.title]
              return (
                <div
                  key={item.title}
                  className="highlight-card"
                  style={{
                    background: tone.bg,
                    borderColor: tone.border,
                  }}
                >
                  <div className="highlight-card__icon" style={{ background: tone.dot }}>
                    {icon}
                  </div>
                  <div className="highlight-card__text">
                    <div className="highlight-card__title">{item.title}</div>
                    <div className="highlight-card__subtitle">{item.subtitle}</div>
                  </div>
                </div>
              )
            })}
          </section>
        </section>
      </div>
    </section>
  )
}

export default HeroSection
