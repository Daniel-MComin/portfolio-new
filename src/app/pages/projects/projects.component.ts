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
      title: "Stockmaster",
      description: "Aplicação de gerenciamento de estoque com funcionalidades de CRUD, autenticação de usuários e relatórios.",
      tech: ["Angular", "Django Rest", "SQLite", "Angular Material"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com/Daniel-MComin/stockmaster-api",
    },
    {
      title: "Pokédex Web App",
      description: "Aplicação Web interativa para consulta de informações sobre Pokémon, utilizando a PokeAPI.",
      tech: ["JavaScript", "HTML5", "CSS3", "PokeAPI"],
      image: "pokedex-print.png",
      github: "https://github.com/Daniel-MComin/The-Pokedex-Finished",
      demo: "https://daniel-mcomin.github.io/The-Pokedex-Finished/"
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
