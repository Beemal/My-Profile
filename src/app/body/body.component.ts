import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less']
})
export class BodyComponent implements OnInit {
  @Input() navHeader:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
