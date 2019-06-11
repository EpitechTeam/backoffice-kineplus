import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {JwtInterceptorService} from './jwt-interceptor.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userEvents = new BehaviorSubject<UserModel>(undefined);

  constructor(private http: HttpClient, private jwtInterceptorService: JwtInterceptorService) {
    this.retrieveUser();
  }

  register(login: string, password: string, birthYear: number): Observable<any> {
    const body = {login, password, birthYear};
    return this.http.post('$register url$', body);
  }

  authenticate(credentials: { email: string; password: string }): Observable<UserModel> {
    const user: UserModel = {
      id: 0,
      login: credentials.email,
      registrationInstant: '',
      isLogged: false,
      privileges: ['user']
    };
    if (user.login === 'monty' || user.login === 'ilyes' || user.login === 'leo' || user.login === 'abdel' || user.login === 'marvyn') {
      user.privileges.push('admin');
    }
    console.log(user);
    const userObservable = new Observable<UserModel>((observer) => {
      observer.next(user);
    });
    this.storeLoggedInUser(user);
    return userObservable;
    // return this.http.post<UserModel>('http://ponyracer.ninja-squad.com/api/users/authentication', credentials).pipe(
    //   tap(user => this.storeLoggedInUser(user))
    // );
  }

  storeLoggedInUser(user: UserModel) {
    user.isLogged = true;
    window.localStorage.setItem('rememberMe', JSON.stringify(user));
    this.userEvents.next(user);
    this.jwtInterceptorService.setJwtToken(user.token);
  }

  retrieveUser() {
    const cache = window.localStorage.getItem('rememberMe');
    if (cache) {
      const user = JSON.parse(cache);
      this.jwtInterceptorService.setJwtToken(user.token);
      this.userEvents.next(user);
    }
  }

  logout() {
    window.localStorage.removeItem('rememberMe');
    this.userEvents.next(null);
    this.jwtInterceptorService.removeJwtToken();
  }
}
