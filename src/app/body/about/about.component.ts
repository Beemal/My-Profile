import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) {
    /*router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        console.log('This is About');
        console.log(event.url);
        event.urlAfterRedirects= "/portfolio-component";
      } 
    });*/
  }

  ngOnInit(): void {
  }

}
