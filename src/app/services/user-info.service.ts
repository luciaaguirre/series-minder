import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, tap, map } from 'rxjs';

const PATH_URL = 'https://jsonplaceholder.typicode.com';
@Injectable({ providedIn: 'root' })
export class UserInfoService {
  private httpClient: HttpClient = inject(HttpClient);
  constructor() {}

  getUserInfo(id: string): Observable<string> {
    return this.httpClient
      .get<UserInfoResponse>(PATH_URL + '/posts/' + id)
      .pipe(map((res: UserInfoResponse) => res.title as string));
  }
}

//Esto deberia ir en otro archivo
export interface UserInfoResponse {
  body: string;
  id: number;
  title: string;
  userId: number;
}
