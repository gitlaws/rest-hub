import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  User as AuthUser,
} from '../../../core/services/auth.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  imports: [CommonModule, UserFormComponent],
})
export class UserProfileComponent implements OnInit {
  currentUser: AuthUser | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }
}
