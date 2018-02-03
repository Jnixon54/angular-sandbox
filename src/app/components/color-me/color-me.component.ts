import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-me',
  templateUrl: './color-me.component.html',
  styleUrls: ['./color-me.component.css']
})
export class ColorMeComponent implements OnInit {
  @Input() color: string;
  constructor() { }

  ngOnInit() {
  }
 
}
 