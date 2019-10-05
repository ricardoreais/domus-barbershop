import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';
import { fadeAnimation } from './fade.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  animations: [fadeAnimation]
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  brand = 'Domus';
  isLandingPage: boolean;

  @HostListener('document:click', ['$event'])
  clickout(event: { target: any }) {
    if (this.eRef.nativeElement.contains(event.target)) {
      // Clicked inside navbar, do nothing
    } else {
      // Clicked outside navbar, close it
      this.navbarOpen = false;
    }
  }

  constructor(private eRef: ElementRef, private router: Router) {
    this.isLandingPage = this.router.url === '/';
  }

  ngOnInit() {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
