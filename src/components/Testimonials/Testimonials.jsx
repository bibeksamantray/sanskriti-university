import './Testimonials.css'

const tabs = ['Students', 'Parents', 'Alumni']

const testimonials = [
  {
    name: 'Aarav Patel',
    role: 'B.Tech CS, 3rd Year',
    quote:
      'The practical exposure here is unmatched. The labs are state-of-the-art and the faculty truly cares about our growth.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60',
  },
  {
    name: 'Priya Sharma',
    role: 'MBA, Final Year',
    quote:
      'Sanskriti University gave me the confidence to lead. The campus life is vibrant and full of opportunities.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60',
  },
  {
    name: 'Rohan Gupta',
    role: 'B.Sc Biotechnology',
    quote:
      'Amazing infrastructure and supportive environment. I have made friends for life and learned so much.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60',
  },
]

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <div className="testimonials__eyebrow">Testimonials</div>
          <h2 className="testimonials__title">
            Stories of <span>Transformation</span>
          </h2>
          <p className="testimonials__subtitle">
            Hear from the people who make Sanskriti University a vibrant community of learners and achievers.
          </p>
        </div>

        <div className="testimonials__tabs" role="tablist" aria-label="Testimonials filter">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              className={`testimonials__tab ${idx === 0 ? 'is-active' : ''}`}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="testimonials__cards">
          {testimonials.map((item, idx) => (
            <article key={item.name} className="testimonials__card">
              <div className="testimonials__card-header">
                <div className="testimonials__avatar">
                  <img src={item.avatar} alt={item.name} />
                </div>
                <div className="testimonials__stars" aria-label={`${item.rating} out of 5 stars`}>
                  {'★★★★★'.slice(0, item.rating)}
                </div>
                <div className="testimonials__quote-mark" aria-hidden>
                  ❾❾
                </div>
              </div>
              <p className="testimonials__quote">“{item.quote}”</p>
              <div className="testimonials__name">{item.name}</div>
              <div className="testimonials__role">{item.role}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
