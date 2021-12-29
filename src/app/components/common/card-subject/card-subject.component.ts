import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-subject',
  templateUrl: './card-subject.component.html',
  styleUrls: ['./card-subject.component.css'],
})
export class CardSubjectsComponent implements OnInit {
  @Input() imgUrl: string = '';
  @Input() title: string = '';
  @Output() clickEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  handleClickEvent() {
    this.clickEvent.emit('Click event');
  }
}
