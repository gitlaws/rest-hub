import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ElementRef, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cyber-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cyber-menu.component.html',
  styleUrl: './cyber-menu.component.scss',
})
export class CyberMenuComponent implements OnDestroy {
  isMenuOpen = false;

  constructor(private elementRef: ElementRef) {}

  ngOnDestroy(): void {
    this.removeDocumentClickListener();
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.addDocumentClickListener();
    } else {
      this.removeDocumentClickListener();
    }
  }

  @HostListener('document:click', ['$event'])
  documentClickHandler(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
      this.removeDocumentClickListener();
    }
  }

  private addDocumentClickListener() {
    document.addEventListener('click', this.documentClickHandler.bind(this));
  }

  private removeDocumentClickListener() {
    document.removeEventListener('click', this.documentClickHandler.bind(this));
  }
}
