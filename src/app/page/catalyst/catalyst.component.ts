import { Component } from '@angular/core';
import { SidebarComponent } from "../../component/sidebar/sidebar.component";
import { SidebarLayoutComponent } from "../../layout/sidebar-layout/sidebar-layout.component";
import { CatalystHomeComponent } from './catalyst-home/catalyst-home.component';

@Component({
  selector: 'app-catalyst',
  imports: [
    SidebarComponent,
    SidebarLayoutComponent,
    CatalystHomeComponent
  ],
  templateUrl: './catalyst.component.html',
  styleUrl: './catalyst.component.scss'
})
export class CatalystComponent {

}
