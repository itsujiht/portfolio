import styles from './WorkCard.module.css'
import Image from 'next/image'

const TYPE_LABELS = {
  illustration: 'Illust',
  music: 'Music',
  video: 'Video',
  article: 'Article',
}

export default function WorkCard({ work, index }) {
  const label = TYPE_LABELS[work.type] ?? work.type

  return (
    <div className={styles.card}>
      <div className={styles.thumb}>
        {work.image ? (
          <img src={work.image} alt={work.title} />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.num}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        )}
        <div className={styles.overlay}>
          <p className={styles.overlayTitle}>{work.title}</p>
          <p className={styles.overlayDesc}>{work.description}</p>
        </div>
      </div>
      <div className={styles.meta}>
        <span className={`label ${styles.type}`}>{label}</span>
        <span className={`label ${styles.year}`}>{work.year}</span>
      </div>
      <h3 className={styles.title}>{work.title}</h3>
    </div>
  )
}
