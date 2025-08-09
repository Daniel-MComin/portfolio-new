import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
   projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações push.",
      tech: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico com previsões detalhadas, mapas interativos e alertas personalizados.",
      tech: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

}
