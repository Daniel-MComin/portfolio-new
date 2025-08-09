import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isOpen = false;
  activeSection = 'home';
  navItems: NavItem[] = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' },
  ];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isOpen = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    for (const item of this.navItems) {
      const element = document.getElementById(item.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = item.id;
          break;
        }
      }
    }
  }

}
