import { Component } from '@angular/core';
import { CatalystHomeOverviewComponent } from '../catalyst-home-overview/catalyst-home-overview.component';
import { CatalystHomeOrdersComponent } from '../catalyst-home-orders/catalyst-home-orders.component';

@Component({
  selector: 'app-catalyst-home',
  imports: [
    CatalystHomeOverviewComponent,
    CatalystHomeOrdersComponent
  ],
  templateUrl: './catalyst-home.component.html',
  styleUrl: './catalyst-home.component.scss'
})
export class CatalystHomeComponent {
}
