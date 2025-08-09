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
    { name: 'JavaScript', icon: 'code2', color: 'hover:bg-yellow-500/20 hover:border-yellow-500/50' },
    { name: 'TypeScript', icon: 'file-code', color: 'hover:bg-blue-500/20 hover:border-blue-500/50' },
    { name: 'React', icon: 'zap', color: 'hover:bg-cyan-500/20 hover:border-cyan-500/50' },
    { name: 'Angular', icon: 'angular', color: 'hover:bg-red-600/20 hover:border-red-600/50' },
    { name: 'Github', icon: 'layers', color: 'hover:bg-green-500/20 hover:border-green-500/50' },
    { name: 'Gitlab', icon: 'server', color: 'hover:bg-green-600/20 hover:border-green-600/50' },
    { name: 'Python', icon: 'coffee', color: 'hover:bg-blue-600/20 hover:border-blue-600/50' },
    { name: 'Bootstrap', icon: 'cpu', color: 'hover:bg-gray-600/20 hover:border-gray-600/50' },
    { name: 'PostgreSQL', icon: 'database', color: 'hover:bg-blue-700/20 hover:border-blue-700/50' },
    { name: 'Angular Material', icon: 'database', color: 'hover:bg-green-700/20 hover:border-green-700/50' },
    { name: 'Power BI', icon: 'power', color: 'hover:bg-red-500/20 hover:border-red-500/50' },
    { name: 'Docker', icon: 'box', color: 'hover:bg-blue-400/20 hover:border-blue-400/50' },
    { name: 'Git', icon: 'git-branch', color: 'hover:bg-orange-700/20 hover:border-orange-700/50' },
    { name: 'Linux', icon: 'settings', color: 'hover:bg-yellow-600/20 hover:border-yellow-600/50' },
    { name: 'Tailwind CSS', icon: 'palette', color: 'hover:bg-teal-500/20 hover:border-teal-500/50' },
    { name: 'Figma', icon: 'figma', color: 'hover:bg-purple-500/20 hover:border-purple-500/50' },
    { name: 'VScode', icon: 'flame', color: 'hover:bg-yellow-500/20 hover:border-yellow-500/50' },
    { name: 'Java', icon: 'coffee', color: 'hover:bg-red-600/20 hover:border-red-600/50' },
    { name: 'Next.js', icon: 'next', color: 'hover:bg-purple-500/20 hover:border-purple-500/50' },
    { name: 'Postman', icon: 'postman', color: 'hover:bg-purple-500/20 hover:border-purple-500/50' },
    { name: 'Swagger', icon: 'swagger', color: 'hover:bg-purple-500/20 hover:border-purple-500/50' },
     { name: 'Node.js', icon: 'node', color: 'hover:bg-purple-500/20 hover:border-purple-500/50' },
     { name: 'Express.js', icon: 'express', color: 'hover:bg-purple-500/20 hover:border-purple-500/50' },
     { name: 'SASS', icon: 'sass', color: 'hover:bg-purple-500/20 hover:border-purple-500/50' },
  ];
  getIcon(name: string): string {
    switch (name) {
      case 'code2':
        return `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
      case 'file-code':
        return `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9.5 9.5L7 12l2.5 2.5M14.5 9.5L17 12l-2.5 2.5"/><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
      case 'express':
        return ``
      default:
        return `<svg class="w-5 h-5"></svg>`;
    }
  }

}
