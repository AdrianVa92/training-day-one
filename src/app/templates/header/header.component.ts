import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() color;
  title = "Day One Activity";
  p1 = "Cloudstaff day one of Angular Training";

  constructor() { }
  
  ngOnInit(): void {
    this.color = 'dark';
  }

}
