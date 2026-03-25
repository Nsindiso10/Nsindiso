import { Component } from '@angular/core';
import { Home } from '../home/home';
import { Skills} from '../skills/skills';
import { Experience } from '../experience/experience';
import { Education } from '../education/education';
import { Projects } from '../projects/projects';
import { Certification } from '../certification/certification';

@Component({
  selector: 'app-pages',
  imports: [Home,
    Skills,
    Experience,
    Education,
    Projects,
    Certification,
  ],
  templateUrl: './pages.html',
  styleUrl: './pages.css',
})
export class Pages {

}
