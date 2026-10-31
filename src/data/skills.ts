import type { ProfileStat, Skill } from '../types/portfolio'

export const skills: Skill[] = [
  {
    id: 'development',
    title: 'Development',
    description: 'React, API Rest, Node.js, Tailwind CSS, Git & Github, Supabase, Vercel',
    iconClass: 'ri-code-s-slash-line',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'UI/UX, Figma, Google Stitch',
    iconClass: 'ri-palette-line',
  },
  {
    id: 'performance',
    title: 'Performance',
    description: 'Optimization, SEO, Accessibility',
    iconClass: 'ri-flashlight-fill',
  },
  {
    id: 'passion',
    title: 'Passion',
    description: 'Clean Code, Best Practices',
    iconClass: 'ri-heart-3-line',
  },
]

export const profileStats: ProfileStat[] = [
  { value: '3+', label: 'Months of Studies' },
  { value: '1', label: 'Completed Project' },
]
