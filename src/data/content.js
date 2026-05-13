// ============================================
//  WORKS DATA
//  type: 'illustration' | 'music' | 'video' | 'article'
// ============================================
export const works = [
  {
    id: 'w01',
    title: 'Quiet Cities vol.1',
    type: 'illustration',
    year: '2025',
    description: 'A series exploring the solitude of urban spaces at dusk.',
    // image: '/works/quiet-cities-1.jpg',  ← 画像を追加したらここに
    image: null,
    tags: ['illustration', 'series'],
    link: null,
  },
  {
    id: 'w02',
    title: 'Margin Notes',
    type: 'illustration',
    year: '2024',
    description: 'Hand-drawn annotations as a form of visual poetry.',
    image: null,
    tags: ['illustration', 'print'],
    link: null,
  },
  {
    id: 'w03',
    title: 'Ambient EP',
    type: 'music',
    year: '2025',
    description: 'Four tracks for late-night listening.',
    image: null,
    tags: ['music', 'ambient'],
    link: null,
  },
  {
    id: 'w04',
    title: 'Frame Studies',
    type: 'video',
    year: '2024',
    description: 'Short-form experiments in motion and stillness.',
    image: null,
    tags: ['video'],
    link: null,
  },
  {
    id: 'w05',
    title: 'Drawing as Thinking',
    type: 'article',
    year: '2025',
    description: 'On the relationship between sketching and cognition.',
    image: null,
    tags: ['writing'],
    link: null,
  },
  {
    id: 'w06',
    title: 'In-Between Hours',
    type: 'illustration',
    year: '2024',
    description: 'A visual diary from liminal moments of the day.',
    image: null,
    tags: ['illustration', 'diary'],
    link: null,
  },
]

// ============================================
//  NEWS DATA
// ============================================
export const news = [
  {
    id: 'n01',
    date: '2025.05',
    category: 'Illustration',
    text: '"Quiet Cities vol.2" released on Pixiv.',
    link: null,
  },
  {
    id: 'n02',
    date: '2025.03',
    category: 'Music',
    text: 'Ambient EP now available on SoundCloud.',
    link: null,
  },
  {
    id: 'n03',
    date: '2025.01',
    category: 'Article',
    text: '"Drawing as Thinking" published on note.',
    link: null,
  },
]

// ============================================
//  PROFILE DATA
// ============================================
export const profile = {
  name: 'Your Name',
  nameJa: 'あなたの名前',
  role: 'Illustrator & Creator',
  bio: `Illustration, music, video & writing — works shaped by curiosity and a love for visual storytelling. Based in Japan.`,
  links: [
    { label: 'Twitter / X', url: 'https://twitter.com/' },
    { label: 'Pixiv', url: 'https://pixiv.net/' },
    { label: 'note', url: 'https://note.com/' },
    { label: 'SoundCloud', url: 'https://soundcloud.com/' },
  ],
}
