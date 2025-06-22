import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0); background-size: 20px 20px;"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-gradient">Technical Skills</h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">Technologies and tools I work with to create amazing digital experiences</p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let category of skillCategories; let i = index" 
               class="skill-category-card bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 card-hover border border-white/20"
               [style.animation-delay]="(i * 0.2) + 's'">
            
            <!-- Category Header -->
            <div class="text-center mb-8">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg animate-glow">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path *ngIf="category.name === 'Frontend'" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  <path *ngIf="category.name === 'Backend'" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                  <path *ngIf="category.name === 'Other'" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ category.name }}</h3>
              <div class="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <!-- Skills List -->
            <div class="space-y-6">
              <div *ngFor="let skill of category.skills; let j = index" 
                   class="skill-item transform transition-all duration-300 hover:scale-105"
                   [style.animation-delay]="((i * 0.2) + (j * 0.1)) + 's'">
                
                <div class="flex justify-between items-center mb-3">
                  <span class="font-semibold text-gray-700 flex items-center">
                    <span class="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                    {{ skill.name }}
                  </span>
                  <span class="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">
                    {{ skill.level }}%
                  </span>
                </div>
                
                <!-- Enhanced Progress Bar -->
                <div class="skill-bar bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                  <div class="skill-progress h-full rounded-full relative overflow-hidden transition-all duration-2000 ease-out"
                       [style.width.%]="skill.level"
                       [style.background]="getSkillGradient(skill.level)">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Category Stats -->
            <div class="mt-8 pt-6 border-t border-gray-200">
              <div class="flex justify-between text-sm text-gray-600">
                <span>{{ category.skills.length }} Skills</span>
                <span>Avg: {{ getAverageLevel(category.skills) }}%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Overall Stats -->
        <div class="mt-16 text-center animate-fade-in-up" style="animation-delay: 0.8s;">
          <div class="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Skill Overview</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600 mb-2">{{ getTotalSkills() }}</div>
                <div class="text-gray-600">Total Skills</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600 mb-2">{{ getOverallAverage() }}%</div>
                <div class="text-gray-600">Overall Average</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600 mb-2">{{ getExpertSkills() }}</div>
                <div class="text-gray-600">Expert Level (85%+)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skill-category-card {
      animation: fadeInUp 0.8s ease-out both;
    }
    
    .skill-item {
      animation: slideInFromLeft 0.6s ease-out both;
    }
    
    .card-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .card-hover:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    }
    
    .skill-bar {
      position: relative;
      background: linear-gradient(90deg, #e5e7eb, #f3f4f6);
    }
    
    .skill-progress {
      position: relative;
      overflow: hidden;
    }
    
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    
    .animate-shimmer {
      animation: shimmer 2s infinite;
    }
    
    @keyframes fadeInUp {
      from { 
        opacity: 0; 
        transform: translateY(30px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    @keyframes slideInFromLeft {
      from { 
        opacity: 0; 
        transform: translateX(-30px); 
      }
      to { 
        opacity: 1; 
        transform: translateX(0); 
      }
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out both;
    }
    
    .text-gradient {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .animate-glow {
      animation: glow 3s ease-in-out infinite;
    }
    
    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
      }
      50% {
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  skillCategories: any[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.skills = this.portfolioService.getSkills();
    this.categorizeSkills();
  }

  categorizeSkills() {
    const categories = {
      frontend: { name: 'Frontend', skills: [] as Skill[] },
      backend: { name: 'Backend', skills: [] as Skill[] },
      other: { name: 'Other', skills: [] as Skill[] }
    };

    this.skills.forEach(skill => {
      categories[skill.category].skills.push(skill);
    });

    this.skillCategories = Object.values(categories).filter(cat => cat.skills.length > 0);
  }

  getSkillGradient(level: number): string {
    if (level >= 90) return 'linear-gradient(90deg, #10b981, #059669)'; // Green
    if (level >= 80) return 'linear-gradient(90deg, #3b82f6, #1d4ed8)'; // Blue
    if (level >= 70) return 'linear-gradient(90deg, #8b5cf6, #7c3aed)'; // Purple
    if (level >= 60) return 'linear-gradient(90deg, #f59e0b, #d97706)'; // Orange
    return 'linear-gradient(90deg, #ef4444, #dc2626)'; // Red
  }

  getAverageLevel(skills: Skill[]): number {
    const total = skills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / skills.length);
  }

  getTotalSkills(): number {
    return this.skills.length;
  }

  getOverallAverage(): number {
    const total = this.skills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / this.skills.length);
  }

  getExpertSkills(): number {
    return this.skills.filter(skill => skill.level >= 85).length;
  }
}