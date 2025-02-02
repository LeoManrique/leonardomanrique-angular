import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutData: any;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutService.getAboutData().subscribe(data => {
      this.aboutData = data;
      console.log('About Data:', data); // Log the JSON data here
      console.log('AboutData:', this.aboutData); // Log the JSON data here
    });
  }
}
