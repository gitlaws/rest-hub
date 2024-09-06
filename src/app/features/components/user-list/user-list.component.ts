import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  User as AuthUser,
} from '../../../core/services/auth.service';
import {
  UserService,
  User as UserServiceUser,
} from '../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class UserListComponent implements OnInit {
  users: (AuthUser | UserServiceUser)[] = [];
  currentUser: AuthUser | null = null;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Fetch authenticated user
    this.authService.getCurrentUser().subscribe((user) => {
      if (user) {
        this.currentUser = user;
        this.users.push(user);
      }
    });

    // Fetch all users from UserService
    this.userService.getUsers().subscribe((data) => {
      this.users = [...this.users, ...data];
    });
  }

  deleteUser(id: number): void {
    // Remove user from UserService
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== id);
    });

    // Remove authenticated user if applicable
    if (this.currentUser && this.currentUser.id === id) {
      this.authService.signOut();
      this.currentUser = null;
    }
  }
}
