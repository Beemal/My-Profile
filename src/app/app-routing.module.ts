import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './body/portfolio/portfolio.component';
import { AboutComponent } from './body/about/about.component';
import { ContactComponent } from './body/contact/contact.component';

const routes: Routes = [
  {path: 'portfolio-component', component: PortfolioComponent},
  {path: 'about-component', component: AboutComponent},
  {path: 'contact-component', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
