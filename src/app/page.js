/* eslint-disable @next/next/no-img-element */
import WorksList from './components/WorksList'
import Button from './components/Button'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>

      <section id="home" className={`${styles.intro}`}>
        <div className={styles.intro_container}>
          <div className={styles.intro_left_column}>
            <h1>We Create <br />Startups.</h1>
            <p>We are statup studio that develops and launches new companies.</p>
            <Button value="See our works" />
          </div>

          <div className={styles.intro_right_column}>
            <img
              className={styles.intro_img}
              src="/images/intro-image.svg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="about" className={`${styles.about}`}>
        <div className={styles.max_width}>
          <div className={styles.about_content}>
            <h2>Who we are</h2>
            <div className={styles.orange}>
              <p>We create products that have innovation and technology at their core.</p>
              <p>We value working with talented people that understand the possibilities of today.</p>
            </div>
            <div className={styles.about_container}>
              <div className={styles.about_item}>
                <h3 className={styles.about_number}>01</h3>
                <hr className={styles.separator} />
                <p>We develop innovative products, systems and services</p>
              </div>
              <div className={styles.about_item}>
                <h3 className={styles.about_number}>02</h3>
                <hr className={styles.separator} />
                <p>Next we build teams to scale them into companies</p>
              </div>
              <div className={styles.about_item}>
                <h3 className={styles.about_number}>03</h3>
                <hr className={styles.separator} />
                <p>Each startup solving one problem at a time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.solving}>
        <div className={styles.max_width}>
          <h2>We love solving problems!</h2>
        </div>
      </div>

      <section className={`${styles.about}`}>
        <div className={styles.max_width}>
          <div className={styles.about_content}>
            <h2>Our core values</h2>
            <div className={styles.about_container}>
              <div className={styles.about_item}>
                <h3 className={styles.about_number}>01. Innovation</h3>
                <hr className={styles.separator} />
                <p>Startupz operates where entrepreneurship and technology intersect. We design solutions and
                  turn them into businesses models.
                </p>
              </div>
              <div className={styles.about_item}>
                <h3 className={styles.about_number}>02. People</h3>
                <hr className={styles.separator} />
                <p>Talent is what enable us to create great companies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className={styles.works}>
        <div className={styles.max_width}>
          <div className={styles.works_content}>
            <h2>Our works</h2>
            <WorksList />
            <q cite='' className={styles.quote}>Startups create a world that actually is better. Any problem that can be solved,
              will be solved by a startup, and that is a huge opportunity.</q>
          </div>
        </div>
      </section>

      <section className={styles.hiring}>
        <div className={styles.max_width}>
          <div className={styles.hiring_content}>
            <h2>We are hiring!</h2>
            <p>
              We&apos;re always looking for talented people to join and help build our startups.
              Check out our current openings.
            </p>
            <Button value="See current openings" />
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.max_width}>
          <div className={styles.contact_content}>
            <h2 className={styles.contact_title}>Are you ready to board this rocket ship?</h2>
            <p>Share your excitement with us.</p>
            <form className={styles.form}>
              <input type="text" name="name" placeholder="Name*" required />
              <input type="email" name="email" placeholder="Email*" required />
              <textarea type="text" name="message" placeholder="Message*" required rows="10" cols="100%" />
              <button type="submit">Shoot us a message</button>
            </form>
          </div>
        </div>
      </section>

    </main>
  )
}
