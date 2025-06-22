import { Injectable } from '@angular/core';
import { Skill, Education, WorkExperience, Project, Contact } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  getPersonalInfo() {
    return {
      name: 'Vignesh S',
      title: 'Full Stack Developer',
      introduction: `Experienced in Software design and development .Net Framework 4.5 application development using Microsoft .Net technologies including ASP.Net 4.5, C#, Visual Studio 2019 and Angular Developer with 3+ years of experience and a degree in Electrical Electronics Engineering. Expert in Angular with experience in versions above Angular 9. Skilled in Node.js, HTML, CSS, and Agile methodologies.`
    };
  }

  getSkills(): Skill[] {
    return [
      { name: 'Angular', level: 90, category: 'frontend' },
      { name: 'HTML', level: 95, category: 'frontend' },
      { name: 'JavaScript', level: 85, category: 'frontend' },
      { name: '.NET C#', level: 88, category: 'backend' },
      { name: 'CSS', level: 90, category: 'frontend' },
      { name: 'Node.js', level: 80, category: 'backend' },
      { name: 'ASP.NET', level: 85, category: 'backend' },
      { name: 'TypeScript', level: 85, category: 'frontend' }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        degree: 'Bachelor of Engineering (EEE)',
        institution: 'Bannari Amman Institute of Technology',
        year: '2021',
        location: 'Erode'
      }
    ];
  }

  getWorkExperience(): WorkExperience[] {
    return [
      {
        company: 'THIRD EYE INFO TECHNOLOGY',
        position: 'Full Stack Developer',
        duration: 'February 2021 - Present',
        description: 'Developing full-stack applications using Angular and .NET technologies. Working with modern web development practices and agile methodologies.'
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        name: 'EPO - Event Plan On',
        url: 'https://eventplanon.com/',
        description: 'A comprehensive event planning platform that helps users organize and manage events efficiently.',
        technologies: ['Angular', 'ASP.NET', 'C#', 'SQL', 'HTML', 'CSS']
      }
    ];
  }

  getContact(): Contact {
    return {
      email: 'vigneshsenthil3006@gmail.com',
      linkedin: 'https://www.linkedin.com/in/vignesh-s-019101241/'
    };
  }
}