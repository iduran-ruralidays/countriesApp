import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private http: HttpClient = inject(HttpClient);

  private baseUrl: string = 'https://restcountries.com/v3.1/';


  getApiCountries(name: string, searchBy: string = 'name'): Observable<Country[]> {

    if (searchBy != 'name' && searchBy != 'region' && searchBy != 'capital') throw new Error('Not allowed value in getApiCountries');

    return this.http.get<Country[]>(`${this.baseUrl}/${searchBy}/${name}`)
      .pipe(
        catchError(err => of([]))
      );

  }

  getApiCountriesByCountryAlphaCode(alphaCode: string): Observable<Country | null> {

    return this.http.get<Country[]>(`${this.baseUrl}/alpha/${alphaCode}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(err => of(null))
      );

  }
}
