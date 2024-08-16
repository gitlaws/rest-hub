import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.scss',
})
export class ComponentDocumentationComponent {}
