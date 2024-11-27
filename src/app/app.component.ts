import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ProfileComponent } from "./profile/profile.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { GooglemapComponent } from "./googlemap/googlemap.component";
import { FooterComponent } from "./footer/footer.component";
import { ProjectsComponent } from "./projects/projects.component";
import { EducationComponent } from './education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProfileComponent, SkillsComponent, ContactFormComponent, GooglemapComponent, FooterComponent, ProjectsComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ResumeApp';
}
