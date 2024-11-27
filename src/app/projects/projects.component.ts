import { Component } from '@angular/core';
import { Project } from './project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects:Project[] = [
    {
      title: 'Clipz',
      img: '../../assets/clipz.png.png',
      desc:'A WebApp for sharing games highlights and engaging with fellow gamers',
      areas:['Angular','firebase','Bootstrap'],
    },
    {
      title: 'Book-Store',
      img: '../../assets/Book-store.png.png',
      desc:'A feature rich e-com website that allow user to browse their fevourite books and buy it, it allow authors to sell their books and make money',
      areas:['React','Node','Tailwind'],
    },
    {
      title: 'Weather App',
      desc: 'A weather forecast web app with hourly and daily weather prediction for any location.',
      img: './../../assets/weatherApp.png',
      areas: ['Angular', 'SCSS', 'TypeScript', 'RxJs'],
    }
  ]

}
