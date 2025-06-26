import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaPhp, 
  FaDocker, FaAws, FaGitAlt, FaGithub, FaLinux, FaJava
} from 'react-icons/fa'
import { 
  SiTypescript, SiNextdotjs, SiExpress, SiAngular, SiTailwindcss, 
  SiBootstrap, SiFastapi, SiMysql, SiPostgresql, SiMongodb, 
  SiGraphql, SiPostman, SiC, SiCplusplus,
  SiLaravel
} from 'react-icons/si'
import type { JSX } from 'react'

export interface SkillItem {
  name: string
  icon: JSX.Element
  color: string
}

export interface SkillCategory {
  category: string
  items: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Lenguajes de Programación',
    items: [
      { name: 'C', icon: <SiC />, color: '#A8B9CC' },
      { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
      { name: 'Java', icon: <FaJava />, color: '#007396' },
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
      { name: 'Angular', icon: <SiAngular />, color: '#DD0031' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express', icon: <SiExpress />, color: '#000000' },
      { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
      { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
    ],
  },
  {
    category: 'Bases de Datos',
    items: [
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
      { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
      { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    ],
  },
]