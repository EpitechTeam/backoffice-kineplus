import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserModel} from './models/user.model';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ManagementService} from './services/management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Backoffice Kine+';
  user: UserModel;
  userEventsSubscription: Subscription;

  constructor(private userService: UserService, private managementService: ManagementService, private router: Router) {}

  ngOnInit() {
    this.userEventsSubscription = this.userService.userEvents.subscribe(user => this.user = user);
  }

  ngOnDestroy() {
  }

  hasPrivileges(user, privilege) {
    return this.managementService.hasPrivilege(user, privilege);
  }
}
