import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leonardomanrique-angular';

  constructor(private elementRef: ElementRef) { };

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
