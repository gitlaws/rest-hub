import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnDestroy,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
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

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.removeDocumentClickListener();
    }
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
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('click', this.documentClickHandler.bind(this));
    }
  }

  private removeDocumentClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener(
        'click',
        this.documentClickHandler.bind(this)
      );
    }
  }
}
