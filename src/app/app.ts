import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('nsindiso-mncedisi-ngema');

  ngOnInit() {
    setTimeout(() => {
      const loader = document.getElementById('pageLoader');
      const content = document.getElementById('pageContent');

      if (loader && content) {
        loader.style.display = 'none';
        content.classList.remove('hidden');
      }
    }, 1800); // ⏱ adjust duration
  }
}
