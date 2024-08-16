import { Component } from '@angular/core';
import { CubeLogoComponent } from './cube-logo/cube-logo.component';
import { CyberMenuComponent } from '../cyber-menu/cyber-menu.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, CubeLogoComponent, CyberMenuComponent, RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {}
