import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  public placeholder: string = 'Insert country...';

  private countryService: CountriesService = inject(CountriesService);

  public countries: Country[] = [];

  public hasPermittedChars = false;

  public isTouchedInputSearch: boolean = false;

  searchCountry(value: string): void {
    this.hasPermittedChars = true;

    if (value.length >= 0 && value.length < 3) {
      this.countries = [];
      this.hasPermittedChars = false;
      return;
    }

    this.countryService.getApiCountries(value)
      .subscribe(countries => this.countries = countries)
  }

  onIsTouched() {
    this.isTouchedInputSearch = true;
  }
}
