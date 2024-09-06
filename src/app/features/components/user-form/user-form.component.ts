// src/app/components/user-form/user-form.component.ts
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { UserService, User } from '../../../core/services/user.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  isEditMode = false;
  @Input() user: User | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.userService
        .getUser(+id)
        .subscribe((user) => this.userForm.patchValue(user));
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      if (this.isEditMode) {
        this.userService
          .updateUser(this.userForm.value)
          .subscribe(() => this.router.navigate(['/']));
      } else {
        this.userService
          .addUser(this.userForm.value)
          .subscribe(() => this.router.navigate(['/']));
      }
    }
  }
}
