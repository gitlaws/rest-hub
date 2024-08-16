import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserManagementComponent } from './features/components/user-management/user-management.component';
import { UserListComponent } from './features/components/user-list/user-list.component';
import { UserFormComponent } from './features/components/user-form/user-form.component';
import { ToolbarComponent } from './features/components/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { ComponentDocumentationComponent } from './features/components/component-documentation/component-documentation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UserManagementComponent,
    UserListComponent,
    UserFormComponent,
    ToolbarComponent,
    ComponentDocumentationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rest-hub';
}
