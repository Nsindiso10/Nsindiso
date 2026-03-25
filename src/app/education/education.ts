import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  title: string;
  institution: string;
  status: string;
  statusColor: string;
  details: string[];}

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
 educationItems: EducationItem[] = [
    {
      title: 'Advanced Diploma in Information Technology',
      institution: 'Vaal University of Technology',
      status: 'In Progress',
      statusColor: 'status-in-progress',
      details: [],
    },
    {
      title: 'Diploma in Information Technology',
      institution: 'Vaal University of Technology',
      status: 'Completed',
      statusColor: 'status-completed',
      details: [
        'Programming fundamentals using Java, Visual Basic, HTML, and PHP',
        'Web development concepts (front-end and back-end basics)',
        'Database design and management using SQL and PL/SQL',
        'Computer networking fundamentals, including IP addressing and network troubleshooting',
        'Computer hardware and operating systems installation and support',
        'Introduction to cloud computing and emerging IT technologies',
        'Business analysis and information systems fundamentals',
        'Software development lifecycle (SDLC) and basic software testing',
        'Practical projects, technical documentation, and presentations',
      ],
    },
    {
      title: 'National Senior Certificate',
      institution: 'Kwashuku Secondary School',
      status: 'Completed',
      statusColor: 'status-completed',
      details: [],
    },
  ];

}
