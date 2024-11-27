import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills = [
    { name: 'HTML', rating: 5 },
    { name: 'CSS', rating: 4 },
    { name: 'JavaScript', rating: 5 },
    { name: 'TypeScript', rating: 4.5 },
    { name: 'Angular', rating: 4.5 },
    { name: 'Node.js', rating: 5 },
    { name: 'Python', rating: 3 },
    { name: 'Java', rating: 3 },
    { name: 'Git', rating: 4 },
    { name: 'SQL', rating: 5 },
    { name: 'RxJs', rating: 4 },
    { name: 'NgRx', rating: 3},
  ];

}
