export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  iconClass: string
}

export interface Project {
  id: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  tags: string[]
}

export interface Skill {
  id: string
  title: string
  description: string
  iconClass: string
}

export interface ProfileStat {
  value: string
  label: string
}

export interface Certification {
  course: string
  institution: string
  year: string
}
