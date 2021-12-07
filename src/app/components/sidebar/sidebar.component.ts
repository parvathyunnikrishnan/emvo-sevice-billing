import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/organization', title: 'Organization',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/user-type', title: 'User Type',  icon:'ni-planet text-blue', class: '' },
    { path: '/user-registration', title: 'User Registration',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/server-category', title: 'Server Category',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/service-master', title: 'Service Master',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/service-order', title: 'Service Order',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/service-billing', title: 'Service Billing',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/collection-analysis', title: 'Collection Analysis',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/service-analysis', title: 'Service Analysis',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/account-head', title: 'Account Head',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/receipt-entry', title: 'Receipt Entry',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/payment-entry', title: 'Payment Entry',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/ledger-statement', title: 'Ledger Statement',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/income-account', title: 'Income & Expenditure Account',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/reset-password', title: 'Reset Password',  icon:'ni-key-25 text-info', class: '' },
    { path: '/general-configuration', title: 'General Configuration',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
