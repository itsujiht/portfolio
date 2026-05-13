import styles from "./page.module.css";
import Link from "next/link";
import { works, news, profile } from '@/data/content';
import WorkCard from '@/components/WorkCard';

const featured = works.filter(w => w.type === 'illustration').slice(0, 3)

export default function Page() {
  return (
    <main className={`page-enter ${styles.page}`}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={`label ${styles.eyebrow}`}>
            {profile.role}
          </p>
          <h1 className={`display ${styles.heroName}`}>
            {profile.name}
          </h1>
          <p className={styles.heroBio}>{profile.bio}</p>
        </div>

        <div className={styles.heroIndex}>
          <p className="label">Index</p>
          <ul className={styles.indexList}>
            <li><Link href="/works" className={styles.indexLink}>Illustration</Link></li>
            <li><Link href="/works" className={styles.indexLink}>Music</Link></li>
            <li><Link href="/works" className={styles.indexLink}>Video</Link></li>
            <li><Link href="/works" className={styles.indexLink}>Article</Link></li>
          </ul>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className={styles.sectionLabel}>
        <span className="label">Selected works</span>
        <hr className="rule" style={{ flex: 1 }} />
        <span className="label">{works.length} works total</span>
      </div>

      {/* ── FEATURED GRID ── */}
      <section className={styles.grid}>
        {featured.map((work, i) => (
          <WorkCard key={work.id} work={work} index={i} />
        ))}
      </section>

      <div className={styles.viewAll}>
        <Link href="/works" className={styles.viewAllLink}>
          View all works →
        </Link>
      </div>

      {/* ── NEWS ── */}
      <div className={styles.sectionLabel}>
        <span className="label">News</span>
        <hr className="rule" style={{ flex: 1 }} />
      </div>

      <section className={styles.news}>
        {news.map(item => (
          <div key={item.id} className={styles.newsItem}>
            <span className={`label ${styles.newsDate}`}>{item.date}</span>
            <span className={`label ${styles.newsCat}`}>{item.category}</span>
            <p className={styles.newsText}>{item.text}</p>
          </div>
        ))}
      </section>

    </main>
  )
}

