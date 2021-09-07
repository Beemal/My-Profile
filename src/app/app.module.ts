import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MastheadComponent } from './body/masthead/masthead.component';
import { PortfolioComponent } from './body/portfolio/portfolio.component';
import { AboutComponent } from './body/about/about.component';
import { ContactComponent } from './body/contact/contact.component';
import { HeaderComponent } from './header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
// import { MatButtonModule } from "@angular/material/button";
// import { MatDialogModule } from "@angular/material/dialog";
import { ModalComponent } from './body/portfolio/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    MastheadComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // MatDialogModule,
    // MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
