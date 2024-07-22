import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RickAndMortyService {
  private httpClient: HttpClient = inject(HttpClient);

  constructor() {}

  getAllCharacters(page: string): Observable<Character[]> {
    return this.httpClient
      .get<ResponsaDTO>(
        'https://rickandmortyapi.com/api/character?page=' + page
      )
      .pipe(
        map((res: ResponseDto) => {
          return res.results.map((character: any) => {
            return { name: character.name, image: character.image };
          });
        })
      );
  }
}

//Types

export interface ResponseDto {
  info: any;
  results: any[];
}

export interface Character {
  name: string;
  image: string;
}
