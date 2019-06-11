import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-unit-testing';
  text = 'contact page';
  contactForm: FormGroup;
  contact = {
    name : '',
    email : '',
    text: ''
  };
  submitted = false;

  constructor(    private formBuilder: FormBuilder,
    ) {
    this.createForm();
  }

  createForm() {
    this.contactForm = new FormGroup( {
      'name': new FormControl(this.contact.name,
        [Validators.required, Validators.minLength(4)]),
      'email': new FormControl(this.contact.email,
          [Validators.required, Validators.email]),
      'text': new FormControl(this.contact.text,
            [Validators.required]),
    });
  }

  onSubmit() {
    this.submitted = true;
  }
}

