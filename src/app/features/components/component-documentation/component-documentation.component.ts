import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { UserManagementComponent } from '../user-management/user-management.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserListComponent } from '../user-list/user-list.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    UserManagementComponent,
    UserFormComponent,
    UserListComponent,
    SignInComponent,
    UserProfileComponent,
  ],
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.scss',
})
export class ComponentDocumentationComponent {}
