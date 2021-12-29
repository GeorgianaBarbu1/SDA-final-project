import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { UserLogin, UserModel } from './model/userModel';
import { map } from 'rxjs/operators';
import { StorageService } from 'ngx-webstorage-service';
import { Subject } from 'rxjs';
import { API_USERS } from './constants';
import { getRandomId } from './utils';
export const USER_SERVICE_STORAGE = new InjectionToken<StorageService>(
  'USER_SERVICE_STORAGE'
);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginChanges: Subject<string> = new Subject<string>();
  constructor(
    private http: HttpClient,
    @Inject(USER_SERVICE_STORAGE)
    private storage: StorageService
  ) {}

  requestRegistration(submitUser: UserModel) {
    return this.http.post(API_USERS, {
      ...submitUser,
      id: getRandomId(),
    });
  }

  login(loggedUser: UserLogin) {
    return this.http.get<UserModel[]>(API_USERS).pipe(
      map((res) => {
        const foundUser = res.filter(
          (user) =>
            loggedUser.email === user.email &&
            loggedUser.password === user.password
        );
        return foundUser[0];
      })
    );
  }

  setItem(code: string, value: string): void {
    this.storage.set(code, value);
    this.loginChanges.next(value);
  }

  getItem(code: string) {
    return this.storage.get(code) || null;
  }

  clearLocalStorage() {
    this.storage.clear();
    this.loginChanges.next();
  }
}
