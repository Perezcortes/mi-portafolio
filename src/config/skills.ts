import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiExpress,
  SiFastapi,
} from 'react-icons/si'

import { TbBrandCpp } from 'react-icons/tb'
import { ComponentType } from 'react'

export interface Skill {
  name: string
  icon: ComponentType<{ size?: number }>
}

export const skills: Skill[] = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Docker', icon: FaDocker },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Express.js', icon: SiExpress },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: FaPython },
  { name: 'PHP', icon: FaPhp },
  { name: 'C++', icon: TbBrandCpp },
]
