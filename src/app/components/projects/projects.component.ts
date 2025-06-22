import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p class="text-gray-600 text-lg">Some of the projects I've worked on</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of projects" class="project-card bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="p-8">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">{{ project.name }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ project.description }}</p>
              
              <div class="mb-6">
                <h4 class="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Technologies Used</h4>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of project.technologies" 
                        class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <a [href]="project.url" target="_blank" 
                 class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                Visit Project
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .project-card {
      @apply transform transition-all duration-300 hover:scale-105 hover:shadow-xl;
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.projects = this.portfolioService.getProjects();
  }
}