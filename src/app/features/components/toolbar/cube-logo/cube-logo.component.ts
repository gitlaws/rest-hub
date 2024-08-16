import { Component } from '@angular/core';
import { CyberMenuComponent } from '../../cyber-menu/cyber-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cube-logo',
  standalone: true,
  imports: [CommonModule, CyberMenuComponent],
  templateUrl: './cube-logo.component.html',
  styleUrl: './cube-logo.component.scss',
})
export class CubeLogoComponent {}
