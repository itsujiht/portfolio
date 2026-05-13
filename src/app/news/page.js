import { news } from '@/data/content'
import styles from './page.module.css'

export default function News() {
  return (
    <main className={`page-enter ${styles.page}`}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={`label ${styles.eyebrow}`}>
            Archive
          </p>

          <h1 className={`display ${styles.title}`}>
            News
          </h1>
        </div>

        <div className={styles.heroRight}>
          <p className={styles.description}>
            Updates, releases, exhibitions,
            publications, and ongoing activities.
          </p>
        </div>
      </section>

      {/* LIST */}
      <section className={styles.listSection}>

        <div className={styles.sectionHeader}>
          <span className="label">
            Recent Updates
          </span>

          <hr className="rule" style={{ flex: 1 }} />

          <span className="label">
            {news.length} entries
          </span>
        </div>

        <div className={styles.list}>
          {news.map(item => (
            <article
              key={item.id}
              className={styles.item}
            >

              <div className={styles.meta}>
                <span className={`label ${styles.date}`}>
                  {item.date}
                </span>

                <span className={`label ${styles.cat}`}>
                  {item.category}
                </span>
              </div>

              <div className={styles.content}>
                <p className={styles.text}>
                  {item.text}
                </p>
              </div>

            </article>
          ))}
        </div>

      </section>

    </main>
  )
}