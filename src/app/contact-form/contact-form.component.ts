import { Component } from '@angular/core';
import { ValidationMsgComponent } from '../validation-msg/validation-msg/validation-msg.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ValidationMsgComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  // constructor(private http: HttpClient) {}

  msgForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', [Validators.maxLength(50), Validators.required]),
    message: new FormControl('', [
      Validators.maxLength(500),
      Validators.required,
    ]),
  });

  get name() {
    return this.msgForm.get('name');
  }
  get email() {
    return this.msgForm.get('email');
  }
  get msg() {
    return this.msgForm.get('message');
  }

  submit() {
    if (this.msgForm.valid) {
      const { name, email, message } = this.msgForm.value;
      this.msgForm.reset()
      // this.postData(name, email, message).subscribe({
      //   next: () => {
      //     this.msgForm.reset();
      //   },
      //   error: (err) => {
      //     console.log(err);
      //   },
      // });
    }
  }

  // postData(name: string, email: string, message: string) {
  //   return this.http.post<{ message: string }>(environment.REST_API + '/mail-api', {
  //     name,
  //     email,
  //     message,
  //   })
  // }
}
