import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    const { email, password } = form.value;

    this.authService.signIn(email, password).subscribe(
      (user) => {
        if (user) {
          this.router.navigate(['/user-list']);
        }
      },
      (error) => {
        this.errorMessage = 'Invalid email or password';
      }
    );
  }
}
