import { Component } from '@angular/core';
import { CyberMenuComponent } from '../../cyber-menu/cyber-menu.component';

@Component({
  selector: 'app-cube-logo',
  standalone: true,
  imports: [CyberMenuComponent],
  templateUrl: './cube-logo.component.html',
  styleUrl: './cube-logo.component.scss',
})
export class CubeLogoComponent {}
