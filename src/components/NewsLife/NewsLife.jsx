import './NewsLife.css'

const newsCards = [
  {
    source: 'THE TIMES OF INDIA',
    title: 'Sanskriti University Ranked Top in Innovation',
    date: 'Dec 12, 2024',
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80',
  },
  {
    source: 'HINDUSTAN TIMES',
    title: 'New Research Center inaugurated by Education Minister',
    date: 'Nov 28, 2024',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    source: 'EDUCATION WORLD',
    title: 'University Wins National Excellence Award 2024',
    date: 'Oct 15, 2024',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80',
  },
]

const lifeVideos = [
  {
    title: 'Annual Sports Meet',
    image:
      'https://images.financialexpressdigital.com/2023/05/Untitled-design-2023-05-19T115218.139.jpg',
  },
  {
    title: 'Convocation Ceremony',
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Cultural Night',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
  },
]

function NewsLife() {
  return (
    <section className="newslife">
      <div className="newslife__top">
        <div className="newslife__column">
          <h3 className="newslife__heading">Chancellor's Desk</h3>
          <div className="newslife__desk-card">
            <div className="newslife__desk-header">
              <div className="newslife__avatar">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60"
                  alt="Chancellor"
                />
              </div>
              <div className="newslife__desk-meta">
                <div className="newslife__desk-name">Dr. Sachin Gupta</div>
                <div className="newslife__desk-role">Chancellor</div>
              </div>
              <div className="newslife__quote-icon" aria-hidden>
                ❾❾
              </div>
            </div>
            <p className="newslife__desk-text">
              "Our mission is to create an environment that fosters intellectual curiosity and encourages students
              to challenge the status quo. We are committed to excellence in education and research."
            </p>
          </div>
        </div>

        <div className="newslife__column newslife__news">
          <h3 className="newslife__heading">In The News</h3>
          <div className="newslife__news-grid">
            {newsCards.map((item) => (
              <article key={item.title} className="newslife__news-card">
                <img src={item.image} alt={item.title} className="newslife__news-image" />
                <div className="newslife__news-body">
                  <div className="newslife__news-source">{item.source}</div>
                  <div className="newslife__news-title">{item.title}</div>
                  <div className="newslife__news-date">{item.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="newslife__life">
        <h3 className="newslife__heading">Life @ SU</h3>
        <div className="newslife__life-grid">
          {lifeVideos.map((item) => (
            <div key={item.title} className="newslife__life-card">
              <img src={item.image} alt={item.title} className="newslife__life-image" />
              <div className="newslife__play" aria-hidden>
                ▶
              </div>
              <div className="newslife__life-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsLife
