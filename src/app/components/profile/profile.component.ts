import {Component, Inject, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {Subscription} from 'rxjs';
import {UserService} from '../../services/user.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

export interface DialogData {
  name: string;
  surname: string;
  email: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: UserModel;
  name: string;
  surname: string;
  email: string;
  userEventsSubscription: Subscription;

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userEventsSubscription = this.userService.userEvents.subscribe(user => this.user = user);
    this.name = 'Monty';
    this.surname = 'Criel';
    this.email = 'monty.criel@kineplus.com';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      width: '250px',
      data: {name: this.name, surname: this.surname, email: this.email}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'app-dialog',
  templateUrl: 'profile-dialog.html',
})
export class ProfileDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
