import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { Contact } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p class="text-gray-600 text-lg">Let's discuss opportunities and collaborate</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-8">Contact Information</h3>
            
            <div class="space-y-6">
              <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Email</p>
                  <a [href]="'mailto:' + contactInfo.email" class="text-blue-600 hover:text-blue-800 transition-colors">
                    {{ contactInfo.email }}
                  </a>
                </div>
              </div>

              <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800">LinkedIn</p>
                  <a [href]="contactInfo.linkedin" target="_blank" class="text-blue-600 hover:text-blue-800 transition-colors">
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <h4 class="text-lg font-semibold text-gray-800 mb-2">Available for</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Full-time opportunities</li>
                <li>• Freelance projects</li>
                <li>• Technical consultations</li>
                <li>• Collaboration on Angular/.NET projects</li>
              </ul>
            </div>

            <!-- Download Resume Button -->
            <div class="mt-8">
              <button 
                (click)="downloadResume()" 
                class="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download My Resume
              </button>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-8">Send a Message</h3>
            
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="form.name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                >
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                >
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  [(ngModel)]="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                >
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                [disabled]="!contactForm.form.valid"
                class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements OnInit {
  contactInfo: Contact = { email: '', linkedin: '' };
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.contactInfo = this.portfolioService.getContact();
  }

  onSubmit() {
    // Here you would typically send the form data to a backend service
    // For now, we'll create a mailto link
    const subject = encodeURIComponent(this.form.subject);
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nEmail: ${this.form.email}\n\nMessage:\n${this.form.message}`
    );
    const mailtoLink = `mailto:${this.contactInfo.email}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    this.form = { name: '', email: '', subject: '', message: '' };
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