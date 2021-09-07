import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, NavigationEnd } from '@angular/router';

declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  formSuccessMsg: any;
  formWarningMsg: any;
  form: any;

  onFormClick() {
    //hide the alert success msg 
    if (!this.formSuccessMsg?.classList.contains('d-none')) {
      this.formSuccessMsg.classList.add('d-none');
    }
    //hide the alert warning msg 
    if (!this.formWarningMsg?.classList.contains('d-none')) {
      this.formWarningMsg.classList.add('d-none');
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      const emailBody = `<h2>This message is sent via <i>bimalparajuli.com.np</i> website</h2>
                    <p>Sender Name : <i>`+ this.getControl.name.value + `</i></p>                
                    <p>Sender Email : <i>`+ this.getControl.email.value + `</i></p>
                    <p>Phone Phone : <i>`+ this.getControl.phone.value + `</i></p>
                    <p>Sender Message: <i>`+ this.getControl.message.value + `</i></p>`;
    
      Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'bimalparajulise@gmail.com',
        Password: '931C3DFD70EEC18853F7AE56E5070BE569DA',
        To: 'bimalparajulise@gmail.com',
        From: 'bimalparajulise@gmail.com',
        Subject: 'Contact Form Submit via bimalparajuli.com.np',
        Body: emailBody
      }).then(() => {
        this.form.reset();
        this.formSuccessMsg?.classList.remove('d-none');
      });
    } else {
      this.formWarningMsg?.classList.remove('d-none');
    }
  }

  public loadScript(url: any) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }


  // Form Validation logic
  userForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public router: Router) {
    this.userForm = this.formBuilder.group({});

      /*router.events.subscribe((event) => {
        if(event instanceof NavigationEnd) {
          console.log('This is contact')
          
          event.url="/contact-component";
          event.urlAfterRedirects="/contact-component";
          console.log(event);
        } 
      });*/
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(26)]],
      email: ['', [Validators.required, Validators.maxLength(65), Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.maxLength(600)]]
    });
    
    this.formSuccessMsg = document.querySelector('.form-success-msg');
    this.formWarningMsg = document.querySelector('.form-warning-msg');
    this.form = document.querySelector('form.contact-us-form');
    this.loadScript('./../../../assets/js/smtp.js');
  }

  get getControl() {
    return this.userForm.controls;
  }
  
}
