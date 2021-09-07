import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.less']
})
export class MastheadComponent implements OnInit {
  @Input() navHeaderName:string = ''; // decorate the property with @Input()
  constructor() { }

  ngOnInit(): void {
  }

}
