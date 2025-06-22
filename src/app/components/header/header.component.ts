import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold text-gray-800">Vignesh S</div>
          
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#experience" class="nav-link">Experience</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>

          <button 
            class="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            (click)="toggleMobileMenu()"
          >
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span class="w-4 h-0.5 bg-gray-600 mb-1 transition-all" [class.rotate-45]="mobileMenuOpen" [class.translate-y-1.5]="mobileMenuOpen"></span>
              <span class="w-4 h-0.5 bg-gray-600 mb-1 transition-all" [class.opacity-0]="mobileMenuOpen"></span>
              <span class="w-4 h-0.5 bg-gray-600 transition-all" [class.-rotate-45]="mobileMenuOpen" [class.-translate-y-1.5]="mobileMenuOpen"></span>
            </div>
          </button>
        </div>

        <div class="md:hidden mt-4 pb-4" [class.hidden]="!mobileMenuOpen">
          <div class="flex flex-col space-y-2">
            <a href="#home" class="nav-link py-2">Home</a>
            <a href="#about" class="nav-link py-2">About</a>
            <a href="#skills" class="nav-link py-2">Skills</a>
            <a href="#experience" class="nav-link py-2">Experience</a>
            <a href="#projects" class="nav-link py-2">Projects</a>
            <a href="#contact" class="nav-link py-2">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .nav-link {
      @apply text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer;
    }
  `]
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}