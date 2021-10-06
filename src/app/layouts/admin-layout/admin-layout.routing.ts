import { Routes } from '@angular/router';
import { ProductListComponent } from '../../product-list/product-list.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { BillingComponent } from '../../billing/billing.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'billing', component: BillingComponent }
];
