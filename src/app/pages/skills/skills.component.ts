import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'JavaScript', icon: 'js', color: 'hover:bg-yellow-500/20 hover:border-yellow-500/50' },
    { name: 'TypeScript', icon: 'ts', color: 'hover:bg-blue-500/20 hover:border-blue-500/50' },
     { name: 'HTML5', icon: 'html', color: 'hover:bg-blue-500/20 hover:border-blue-500/50' },
      { name: 'CSS3', icon: 'css', color: 'hover:bg-blue-500/20 hover:border-blue-500/50' },
    { name: 'React', icon: 'react', color: 'hover:bg-cyan-500/20 hover:border-cyan-500/50' },
    { name: 'Angular', icon: 'angular', color: 'hover:bg-red-600/20 hover:border-red-600/50' },
    { name: 'Github', icon: 'github', color: 'hover:bg-green-500/20 hover:border-green-500/50' },
    { name: 'Gitlab', icon: 'gitlab', color: 'hover:bg-green-600/20 hover:border-green-600/50' },
    //{ name: 'Python', icon: 'python', color: 'hover:bg-blue-600/20 hover:border-blue-600/50' },
    { name: 'Bootstrap', icon: 'bootstrap', color: 'hover:bg-gray-600/20 hover:border-gray-600/50' },
    // { name: 'PostgresSQL', icon: 'sql', color: 'hover:bg-blue-700/20 hover:border-blue-700/50' },
    { name: 'Angular Material', icon: 'material', color: 'hover:bg-green-700/20 hover:border-green-700/50' },
    { name: 'Power BI', icon: 'power', color: 'hover:bg-red-500/20 hover:border-red-500/50' },
    //{ name: 'Docker', icon: 'docker', color: 'hover:bg-blue-400/20 hover:border-blue-400/50' },
    { name: 'Git', icon: 'git', color: 'hover:bg-orange-700/20 hover:border-orange-700/50' },
    { name: 'Linux', icon: 'linux', color: 'hover:bg-yellow-600/20 hover:border-yellow-600/50' },
    { name: 'Tailwind CSS', icon: 'tailwind', color: 'hover:bg-teal-500/20 hover:border-teal-500/50' },
    { name: 'Figma', icon: 'figma', color: 'hover:bg-purple-500/20 hover:border-purple-500/50' },
    { name: 'VScode', icon: 'code', color: 'hover:bg-yellow-500/20 hover:border-yellow-500/50' },
    { name: 'Postman', icon: 'postman', color: 'hover:bg-purple-500/20 hover:border-purple-500/50' },
    //{ name: 'Swagger', icon: 'swagger', color: 'hover:bg-purple-500/20 hover:border-purple-500/50' },
    { name: 'SASS', icon: 'sass', color: 'hover:bg-purple-500/20 hover:border-purple-500/50' },
  ];
  getIcon(name: string): string {
    switch (name) {
    case 'js':
      return `<img src="JavaScript.svg" alt="JavaScript" class="w-5 h-5" />`;
    case 'ts':
      return `<img src="TypeScript.svg" alt="TypeScript" class="w-5 h-5" />`;
      case 'html':
      return `<img src="HTML5.svg" alt="TypeScript" class="w-5 h-5" />`;
      case 'css':
      return `<img src="CSS3.svg" alt="TypeScript" class="w-5 h-5" />`;
    case 'react':
      return `<img src="React.svg" alt="React" class="w-5 h-5" />`;
    case 'angular':
      return `<img src="Angular.svg" alt="Angular" class="w-5 h-5" />`;
    case 'github':
      return `<img src="GitHub.svg" alt="Github" class="w-5 h-5" />`;
    case 'gitlab':
      return `<img src="GitLab.svg" alt="Gitlab" class="w-5 h-5" />`;
    case 'python':
      return `<img src="Python.svg" alt="Python" class="w-5 h-5" />`;
    case 'bootstrap':
      return `<img src="Bootstrap.svg" alt="Bootstrap" class="w-5 h-5" />`;
    case 'sql':
      return `<img src="PostgresSQL.svg" alt="PostgreSQL" class="w-5 h-5" />`;
    case 'material':
      return `<img src="material.svg" alt="Angular Material" class="w-5 h-5" />`;
    case 'power':
      return `<img src="bi.svg" alt="Power BI" class="w-5 h-5" />`;
    case 'docker':
      return `<img src="Docker.svg" alt="Docker" class="w-5 h-5" />`;
    case 'git':
      return `<img src="Git.svg" alt="Git" class="w-5 h-5" />`;
    case 'linux':
      return `<img src="Linux.svg" alt="Linux" class="w-5 h-5" />`;
    case 'tailwind':
      return `<img src="TailwindCSS.svg" alt="Tailwind CSS" class="w-5 h-5" />`;
    case 'figma':
      return `<img src="Figma.svg" alt="Figma" class="w-5 h-5" />`;
    case 'code':
      return `<img src="VScode.svg" alt="VScode" class="w-5 h-5" />`;
    case 'postman':
      return `<img src="Postman.svg" alt="Postman" class="w-5 h-5" />`;
    case 'swagger':
      return `<img src="Swagger.svg" alt="Swagger" class="w-5 h-5" />`;
    case 'sass':
      return `<img src="Sass.svg" alt="SASS" class="w-5 h-5" />`;
    default:
      return `<svg class="w-5 h-5"></svg>`;
  }
  }

}
