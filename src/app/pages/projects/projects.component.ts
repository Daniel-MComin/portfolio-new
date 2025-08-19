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
      tech: ["Angular", "Django Rest", "SQLite", "Angular Material", "Chart.js"],
      image: "https://www.phsoft.com.br/wp-content/uploads/2020/10/controle-estoque.png",
      github: "https://github.com/Daniel-MComin/stockmaster-api",
    },
    {
      title: "Pokédex Interativa",
      description: "Aplicação Web interativa para consulta de informações sobre Pokémon, utilizando uma API pública chamada PokeAPI.",
      tech: ["JavaScript", "HTML5", "CSS3", "PokeAPI"],
      image: "poke-print-2.png",
      github: "https://github.com/Daniel-MComin/The-Pokedex-Finished",
      demo: "https://daniel-mcomin.github.io/The-Pokedex-Finished/"
    },
    {
      title: "Protótipo Departamento de Pós-Graduação",
      description: "Protótipo de uma landing page para o departamento de pós-graduação do Instituto Federal de Educação, Ciência e Tecnologia do Ceará.",
      tech: ["Angular", "TypeScript", "Bootstrap"],
      image: "deppi.jpg",
      github: "https://deppi-sandy.vercel.app/",
      demo: "https://github.com/Daniel-MComin/deppi-"
    },
    {
      title: "Campos Gerais Tour",
      description: "Protótipo de uma landing page para um projeto ficticio de uma empresa de turismo.",
      tech: ["Angular", "TypeScript", "SCSS"],
      image: "cgtour.png",
      github: "https://github.com/Daniel-MComin/cg-tour",
      demo: "https://cg-tour.vercel.app/"
    },
    {
      title: "Portfólio Pessoal",
      description: "Protótipo de uma landing page para um projeto ficticio de uma empresa de turismo.",
      tech: ["Angular", "TypeScript", "Tailwind CSS"],
      image: "port.png",
      github: "https://github.com/Daniel-MComin/cg-tour",
      demo: "https://portfolio-new-phi-peach.vercel.app/"
    }
  ];

}
