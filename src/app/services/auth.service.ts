import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: BehaviorSubject<string> = new BehaviorSubject('no user');
  user$: Observable<string> = this.user.asObservable();

  constructor() {}

  login(name: string, password: string): void {
    this.user.next(name);
  }
}
