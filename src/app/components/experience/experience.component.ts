import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { WorkExperience, Education } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Experience & Education</h2>
          <p class="text-gray-600 text-lg">My professional journey and academic background</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Work Experience -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
              <span class="w-2 h-8 bg-blue-600 rounded mr-4"></span>
              Work Experience
            </h3>
            
            <div class="space-y-6">
              <div *ngFor="let exp of workExperience" class="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 class="text-xl font-semibold text-gray-800">{{ exp.position }}</h4>
                    <p class="text-blue-600 font-medium">{{ exp.company }}</p>
                  </div>
                  <span class="text-gray-500 text-sm mt-2 md:mt-0">{{ exp.duration }}</span>
                </div>
                <p *ngIf="exp.description" class="text-gray-600 leading-relaxed">
                  {{ exp.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
              <span class="w-2 h-8 bg-indigo-600 rounded mr-4"></span>
              Education
            </h3>
            
            <div class="space-y-6">
              <div *ngFor="let edu of education" class="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 class="text-xl font-semibold text-gray-800">{{ edu.degree }}</h4>
                    <p class="text-indigo-600 font-medium">{{ edu.institution }}</p>
                    <p class="text-gray-500">{{ edu.location }}</p>
                  </div>
                  <span class="text-gray-500 text-sm mt-2 md:mt-0">{{ edu.year }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent implements OnInit {
  workExperience: WorkExperience[] = [];
  education: Education[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.workExperience = this.portfolioService.getWorkExperience();
    this.education = this.portfolioService.getEducation();
  }
}