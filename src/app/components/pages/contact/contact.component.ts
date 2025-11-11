import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h1 class="text-center mb-4">Contact Us</h1>
          <p class="text-center text-muted">
            Get in touch with our team for support, questions, or feedback about PlanMei.
          </p>
          <div class="text-center">
            <p><strong>Email:</strong> support@planmei.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {}