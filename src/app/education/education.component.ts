import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  education = [
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Indira Gandhi National Open University',
      Year: "2020-2024"
    },
    {
      degree: 'High School',
      institution: 'Govt Boys Sr Sec School Kalkaji No-2',
      Year: "2019"
    },
    {
      degree: 'Secondary school',
      institution: 'Govt Boys Sr Sec School Tekhand',
      Year: "2017"
    }
  ];
  
}
