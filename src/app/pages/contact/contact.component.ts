import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  sent = false;

  onSubmit(form: NgForm) {
    console.log('Form submitted:', this.formData);
    this.sent = true;
    form.resetForm();
    setTimeout(() => (this.sent = false), 4000);
  }
}
