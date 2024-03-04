import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public placeholder: string = 'Insert country...';

  private countriesService: CountriesService = inject(CountriesService);

  public countries: Country[] = [];

  public hasPermittedChars = false;

  public isTouchedInputSearch: boolean = false;

  searchRegion(value: string): void {
    this.hasPermittedChars = true;

    if (value.length >= 0 && value.length < 3) {
      this.countries = [];
      this.hasPermittedChars = false;
      return;
    }

    this.countriesService.getApiCountries(value, 'region')
      .subscribe(countries => this.countries = countries)
  }

  onIsTouched() {
    this.isTouchedInputSearch = true;
  }
}
