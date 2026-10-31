import type { Project } from '../types/portfolio'

const projectImageSrc = '/imagens/pawel-czerwinski-7FqOISWr5V0-unsplash.jpg'

export const projects: Project[] = [
  {
    id: 'budget-simulator',
    title: 'Coming soon',
    description: 'The project is under development.',
    imageSrc: projectImageSrc,
    imageAlt: 'Budget Simulator - A person using a calculator over documents.',
    tags: ['In planning'],
  },
  {
    id: 'projects-dashboard',
    title: 'Coming soon',
    description: 'The project is under development.',
    imageSrc: projectImageSrc,
    imageAlt:
      'Projects Dashboard - A clean UI dashboard with purple accents, featuring graphs and user stats.',
    tags: ['In planning'],
  },
]
