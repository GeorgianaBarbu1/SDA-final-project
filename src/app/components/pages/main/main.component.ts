import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'src/app/service/model/subject';
import { TutoringService } from 'src/app/service/tutoringService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  subjectsData: Subject[] = [];
  constructor(
    private tutoringService: TutoringService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.readAllSubjects();
  }
  readAllSubjects() {
    return this.tutoringService.getSubjects().subscribe((data: Subject[]) => {
      this.subjectsData = data;
    });
  }

  handleSubjectEvent(subject: string) {
    this.router.navigate(['/home/' + subject]);
  }
}
