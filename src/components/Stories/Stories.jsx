import './Stories.css'

const filters = ['All', 'Academics', 'Culture', 'Sports', 'Innovation']

const featureStory = {
  title: 'Global Leadership Summit 2024: Shaping the Future',
  date: '12 Oct 2024',
  tag: 'Featured',
  summary:
    'Delegates from over 30 countries gathered to discuss sustainable development goals and the role of youth in global',
  image:
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
}

const storyList = [
  {
    title: 'Harmony in Diversity: Annual Cultural Fest',
    date: '15 Sep 2024',
    tag: 'Culture',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=380&q=80',
  },
  {
    title: 'Championship Victory: Football Finals',
    date: '20 Nov 2024',
    tag: 'Sports',
    image:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=380&q=80',
  },
  {
    title: 'Innovation Fair: Robotics & AI',
    date: '05 Dec 2024',
    tag: 'Innovation',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=380&q=80',
  },
]

function Stories() {
  return (
    <section className="stories-wrap">
      <div className="stories">
      <div className="stories__header">
        <h2 className="stories__title">
          Stories & <span>Highlights.</span>
        </h2>
        <div className="stories__filters">
          {filters.map((filter, idx) => (
            <button
              key={filter}
              className={`stories__filter ${idx === 0 ? 'is-active' : ''}`}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="stories__grid">
        <article className="stories__feature" role="presentation">
          <img src={featureStory.image} alt="Feature story" className="stories__feature-img" />
          <div className="stories__feature-overlay" />
          <div className="stories__feature-content">
            <div className="stories__feature-meta">
              <span className="stories__badge stories__badge--yellow">{featureStory.tag}</span>
              <span className="stories__meta-dot" aria-hidden>
                •
              </span>
              <span className="stories__meta-text">{featureStory.date}</span>
            </div>
            <h3 className="stories__feature-title">{featureStory.title}</h3>
            <p className="stories__feature-summary">{featureStory.summary}</p>
          </div>
        </article>

        <div className="stories__list">
          {storyList.map((story) => (
            <article key={story.title} className="stories__card">
              <div className="stories__thumb">
                <img src={story.image} alt={story.title} />
              </div>
              <div className="stories__card-body">
                <div className="stories__card-meta">
                  <span className="stories__badge stories__badge--outline">{story.tag}</span>
                  <span className="stories__meta-text">{story.date}</span>
                </div>
                <h4 className="stories__card-title">{story.title}</h4>
                <button className="stories__read-more" type="button">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default Stories
