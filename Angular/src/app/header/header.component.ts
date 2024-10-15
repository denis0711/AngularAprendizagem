import { Component } from '@angular/core';
import {  MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, SidebarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[] = [];
  sidebarVisible: boolean = false; // Controle da visibilidade da sidebar

  constructor() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'About', icon: 'pi pi-info', routerLink: '/about' },
      { label: 'Contact', icon: 'pi pi-phone', routerLink: '/contact' }
    ];
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible; // Alterna entre abrir e fechar a sidebar
  }
}
