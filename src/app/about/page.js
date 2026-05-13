import { profile } from '@/data/content'
import styles from './page.module.css'

export default function About() {
  return (
    <main className={`page-enter ${styles.page}`}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={`label ${styles.eyebrow}`}>
            Profile
          </p>

          <h1 className={`display ${styles.name}`}>
            {profile.name}
          </h1>
        </div>

        <div className={styles.heroRight}>
          <p className={`label ${styles.role}`}>
            {profile.role}
          </p>
        </div>
      </section>

      {/* STATEMENT */}
      <section className={styles.statement}>
        <div className={styles.statementLine} />

        <div className={styles.statementBody}>
          <p>
            {profile.bio}
          </p>
        </div>
      </section>

      {/* INFO */}
      <section className={styles.info}>

        {/* LEFT */}
        <div className={styles.mainColumn}>

          <div className={styles.block}>
            <p className={`label ${styles.blockLabel}`}>
              Practice
            </p>

            <div className={styles.blockText}>
              <p>
                This portfolio collects works across
                illustration, moving image, music,
                writing, and computational research.
              </p>

              <p>
                The practice explores relationships
                between aesthetics, systems,
                perception, and temporality through
                both artistic and scientific approaches.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <p className={`label ${styles.blockLabel}`}>
              Interests
            </p>

            <div className={styles.tags}>
              <span>Generative Systems</span>
              <span>Embodied Cognition</span>
              <span>Illustration</span>
              <span>Complex Systems</span>
              <span>Sound</span>
              <span>Interactive Media</span>
              <span>Research</span>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <aside className={styles.sideColumn}>

          <div className={styles.sideSection}>
            <p className="label">
              Links
            </p>

            <ul className={styles.linkList}>
              {profile.links.map(({ label, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{label}</span>

                    <span className={styles.arrow}>
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </aside>

      </section>

    </main>
  )
}
