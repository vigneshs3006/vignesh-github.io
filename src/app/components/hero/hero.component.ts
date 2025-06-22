import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 relative overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style="animation-delay: -2s;"></div>
        <div class="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style="animation-delay: -4s;"></div>
      </div>

      <div class="container mx-auto px-6 py-20 relative z-10">
        <div class="text-center">
          <div class="mb-8 animate-scale-in">
            <div class="w-40 h-40 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl animate-glow relative overflow-hidden">
              <span class="relative z-10">VS</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-50"></div>
            </div>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold text-gray-800 mb-4 animate-fade-in-up text-gradient">
            {{ personalInfo.name }}
          </h1>
          
          <h2 class="text-2xl md:text-3xl text-blue-600 mb-8 animate-fade-in-up font-semibold" style="animation-delay: 0.2s;">
            {{ personalInfo.title }}
          </h2>
          
          <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up text-shadow" style="animation-delay: 0.4s;">
            {{ personalInfo.introduction }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style="animation-delay: 0.6s;">
            <a href="#contact" class="btn-primary btn-3d btn-gradient group">
              <span class="relative z-10 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Get In Touch
              </span>
            </a>
            <a href="#projects" class="btn-secondary btn-3d group">
              <span class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                View My Work
              </span>
            </a>
            <button (click)="downloadResume()" class="btn-download btn-3d group">
              <span class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </span>
            </button>
          </div>

          <!-- Scroll Indicator -->
          <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .btn-primary {
      @apply bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl relative overflow-hidden;
    }
    
    .btn-secondary {
      @apply border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm;
    }
    
    .btn-download {
      @apply bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl relative overflow-hidden;
    }
    
    .btn-3d {
      position: relative;
      transform-style: preserve-3d;
    }
    
    .btn-3d:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    
    .btn-3d:active {
      transform: translateY(0px) scale(1.02);
    }
    
    .btn-gradient::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.5s ease;
    }
    
    .btn-gradient:hover::before {
      left: 100%;
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
    
    @keyframes scaleIn {
      from { 
        opacity: 0; 
        transform: scale(0.8); 
      }
      to { 
        opacity: 1; 
        transform: scale(1); 
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }
    
    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(147, 51, 234, 0.2);
      }
      50% {
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4);
      }
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out both;
    }
    
    .animate-scale-in {
      animation: scaleIn 0.8s ease-out;
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-glow {
      animation: glow 3s ease-in-out infinite;
    }
    
    .text-gradient {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .text-shadow {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class HeroComponent implements OnInit {
  personalInfo: any = {};

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.personalInfo = this.portfolioService.getPersonalInfo();
  }

  downloadResume() {
    // Create resume content
    const resumeContent = this.generateResumeContent();
    
    // Create and download the file
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Vignesh_S_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  private generateResumeContent(): string {
    const personalInfo = this.portfolioService.getPersonalInfo();
    const skills = this.portfolioService.getSkills();
    const education = this.portfolioService.getEducation();
    const experience = this.portfolioService.getWorkExperience();
    const projects = this.portfolioService.getProjects();
    const contact = this.portfolioService.getContact();

    return `
VIGNESH S
Full Stack Developer

CONTACT INFORMATION
Email: ${contact.email}
LinkedIn: ${contact.linkedin}

PROFESSIONAL SUMMARY
${personalInfo.introduction}

TECHNICAL SKILLS
${skills.map(skill => `• ${skill.name} - ${skill.level}%`).join('\n')}

WORK EXPERIENCE
${experience.map(exp => `
${exp.position} at ${exp.company}
${exp.duration}
${exp.description || ''}
`).join('\n')}

EDUCATION
${education.map(edu => `
${edu.degree}
${edu.institution}, ${edu.location}
Graduated: ${edu.year}
`).join('\n')}

PROJECTS
${projects.map(project => `
${project.name}
${project.description}
Technologies: ${project.technologies.join(', ')}
URL: ${project.url}
`).join('\n')}

Generated from: Portfolio Website
Date: ${new Date().toLocaleDateString()}
    `.trim();
  }
}