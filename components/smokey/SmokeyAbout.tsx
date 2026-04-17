import Image from 'next/image'

export default function SmokeyAbout() {
  return (
    <section id="about" className="sj-about">
      <div className="container">
        <div className="sj-about__grid">

          <div className="sj-about__image-wrap">
            <Image
              src="https://images.unsplash.com/photo-1749996089724-268703b8c4dc?w=900&q=80"
              alt="Inside Smokey Joe's Lunch Bar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="sj-about__badge">
              <p className="sj-about__badge-time">7am</p>
              <p className="sj-about__badge-label">Open daily</p>
            </div>
          </div>

          <div>
            <p className="sj-about__eyebrow">About Us</p>

            <h2 className="sj-about__heading">
              Homemade.<br />
              Every day.
            </h2>

            <p className="sj-about__body">
              Smokey Joe's has been feeding Palmerston North from the heart of Bennett Street
              for years. We're a proper NZ lunch bar, the kind that makes things fresh,
              knows your name, and never serves you something frozen and microwaved.
            </p>

            <p className="sj-about__body">
              From our bain marie to our homemade baking to our burgers, everything
              is made with care. Come in, grab a seat, or text ahead and we'll have
              your order ready when you arrive.
            </p>

            <div className="sj-about__stats">
              {[
                { stat: '7am', label: 'Open every morning' },
                { stat: '100%', label: 'Homemade' },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <p className="sj-about__stat-value">{stat}</p>
                  <p className="sj-about__stat-label">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
