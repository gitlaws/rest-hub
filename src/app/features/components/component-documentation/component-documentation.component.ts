import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { UserManagementComponent } from '../user-management/user-management.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserListComponent } from '../user-list/user-list.component';
import { QuickfeedComponent } from '../quickfeed/quickfeed.component';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    UserManagementComponent,
    UserFormComponent,
    UserListComponent,
    QuickfeedComponent,
  ],
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.scss',
})
export class ComponentDocumentationComponent {}
