import { Component, OnInit } from '@angular/core';
import { QualificationService } from './qualification.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  qualifications: any = {};

  constructor(private qualificationService: QualificationService) {}

  ngOnInit(): void {
    this.qualificationService.getQualifications().subscribe(data => {
      this.qualifications = data;
    });
  }
}