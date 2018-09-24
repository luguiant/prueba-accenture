import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../@core/data/users.service';
import { AnalyticsService } from '../../@core/utils/analytics.service';
import { LayoutService } from '../../@core/data/layout.service';
import { USER_OPTIONS } from '../../menu/user-options';

@Component({
  selector: 'ngx-header-custom',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  public user: any;

  public userMenu;


  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService) {

      this.user = { name: 'Cliente', picture: '../../../assets/images/cover2.jpg' };
      this.userMenu =  [{ title: 'Log out',link: '/logout/1' }];
  }

  ngOnInit() {
      console.log( this.user);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

}
