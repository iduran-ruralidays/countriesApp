import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public placeholder: string = 'Insert capital...';

  private countriesService: CountriesService = inject(CountriesService);

  public countries: Country[] = [];

  public hasPermittedChars = false;

  public isTouchedInputSearch: boolean = false;

  searchCapital(value: string): void {
    this.hasPermittedChars = true;

    if (value.length >= 0 && value.length < 3) {
      this.countries = [];
      this.hasPermittedChars = false;
      return;
    }

    this.countriesService.getApiCountries(value, 'capital')
      .subscribe(countries => this.countries = countries)
  }

  onIsTouched() {
    this.isTouchedInputSearch = true;
  }
}
