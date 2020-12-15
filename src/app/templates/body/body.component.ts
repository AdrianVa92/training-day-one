import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  name: string = '';
  color;

  @Output() changeClass = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.changeClass.emit(this.color);
  }
}
