import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {Subscription} from 'rxjs';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  user: UserModel;
  isOpen: boolean;
  userEventsSubscription: Subscription;
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public sidenavClose = new EventEmitter();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userEventsSubscription = this.userService.userEvents.subscribe(user => this.user = user);
    this.isOpen = false;
  }

  toggleSidenav() {
    this.sidenavToggle.emit();
  }

  closeSidenav() {
    this.sidenavClose.emit();
  }

  ngOnDestroy() {
    if (this.userEventsSubscription) {
      this.userEventsSubscription.unsubscribe();
    }
  }

  logout() {
    this.closeSidenav();
    if (this.user && this.user.isLogged) {
      this.userService.logout();
    }
    this.router.navigate(['/']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
