import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() navHeader: string = ''; // decorate the property with @Input()

  toggleMenu() {
    setTimeout(function showHideMenuAndIcon() {
      document.querySelector('.navbar-collapse')?.classList.toggle('show');
      document.querySelector('.navbar-toggler > i')?.classList.toggle('bi-caret-up-fill');
    }, 100);
  }  

  scroll(component: String) {
    document.querySelector('app-' + component)?.scrollIntoView({behavior:'smooth', block: 'center'});
    // Navigate silently to / No change ion URL when any nav link is clicked.
    this.router.navigate(['/'], { skipLocationChange: true });
  }
  constructor(public router: Router) { 
  }
  
  ngOnInit(): void {
  }

}
