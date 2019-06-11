import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.model';
import {Subscription} from 'rxjs';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: UserModel;
  previews: [];
  userEventsSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userEventsSubscription = this.userService.userEvents.subscribe(user => this.user = user);
    this.previews = [
      {title: 'API', description: 'Total', value: 12, icon: 'settings'},
      {title: 'API', description: 'Actif', value: 8, icon: 'offline_bolt'},
      {title: 'Users', description: 'Total', value: 5, icon: 'face'},
      {title: 'Server', description: 'Status', value: 'Online', icon: 'dns'},
    ];
  }

}
