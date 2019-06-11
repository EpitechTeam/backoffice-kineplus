import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor() { }

  hasPrivilege(user, privilege): boolean {
    if (!user) {
      return false;
    }
    if (user.privileges.indexOf('admin') > -1) {
      return true;
    }
    return user.privileges.indexOf(privilege) > -1;
  }
}
