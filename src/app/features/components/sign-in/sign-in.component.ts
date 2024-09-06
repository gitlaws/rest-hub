import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, UserFormComponent, UserListComponent],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  errorMessage: string | null = null;

  constructor(public authService: AuthService, private router: Router) {}

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
