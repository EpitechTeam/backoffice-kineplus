import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/user.model';
import {ManagementService} from '../../services/management.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  user: UserModel;
  users: [];
  constructor(private userService: UserService, private managementService: ManagementService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userEventsSubscription = this.userService.userEvents.subscribe(user => this.user = user);
    this.users = [
      {name: 'Monty', surname: 'Criel', email: 'monty.criel@kineplus.com', id: 0},
      {name: 'Leo', surname: 'Lecherbonnier', email: 'leo.lecherbonier@kineplus.com', id: 1},
      {name: 'Ilyes', surname: 'Kahoul', email: 'ilyes.kahoul@kineplus.com', id: 2},
      {name: 'Abdel', surname: 'Cherkaoui', email: 'abdel.cherkaoui@kineplus.com', id: 3},
      {name: 'Bot', surname: 'Bot', email: 'bot@kineplus.com', id: 4},
    ];
  }

  hasPrivilege(user, privilege) {
    return this.managementService.hasPrivilege(user, privilege);
  }

  deleteUser(id) {
    let _index = -1;
    this.users.forEach((user, index) => {
      if (user.id === id) {
        _index = index;
      }
    });
    if (_index > -1) {
      this.users.splice(_index, 1);
    }
  }

  confirmDelete(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
