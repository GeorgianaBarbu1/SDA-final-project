import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tutoring } from 'src/app/service/model/tutoring';

@Component({
  selector: 'app-tutoring-card',
  templateUrl: './tutoring-card.component.html',
  styleUrls: ['./tutoring-card.component.css'],
})
export class TutoringCardComponent implements OnInit {
  @Input() selectedTutoring: Tutoring = {} as Tutoring;
  @Input() editMode: Boolean = false;
  @Output() editEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onEdit() {
    this.editEvent.emit();
  }
  onDelete() {
    this.deleteEvent.emit();
  }
}
