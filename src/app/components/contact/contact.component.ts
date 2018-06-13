import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { EmailData } from '../../models/email-contact';
import { ContactService } from '../services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private ContactService:ContactService) {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit() {
    this.ContactService.get()
  }

  createFormGroup() {
    return new FormGroup({
      emailData: new FormGroup({
        name: new FormControl('', [Validators.required ,Validators.minLength(10)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl(null, [Validators.required,Validators.min  (8)]),
        msj: new FormControl('', [Validators.required, Validators.minLength(10)])
      }),
    });
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: EmailData = Object.assign({}, this.contactForm.value);
    
    // Do useful stuff with the gathered data
    console.log(this.contactForm.valid);
    
  }

}
