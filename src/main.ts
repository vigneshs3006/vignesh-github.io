import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './app/components/header/header.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { FooterComponent } from './app/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    HeroComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-skills></app-skills>
        <app-experience></app-experience>
        <app-projects></app-projects>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `
})
export class App {}

bootstrapApplication(App);