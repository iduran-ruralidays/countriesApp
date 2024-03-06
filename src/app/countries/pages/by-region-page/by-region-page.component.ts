import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Regions } from '../../interfaces/navBarTypes.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public navBarOptions: Regions[] = ['Europe','America','Africa','Oceania','Asia'];

  public placeholder: string = 'Insert country...';

  private countriesService: CountriesService = inject(CountriesService);

  public countries: Country[] = [];

  public hasPermittedChars = true;

  public isTouchedInputSearch: boolean = false;

  searchRegion(value: string): void {
    
    this.isTouchedInputSearch = true;
    this.countriesService.getApiCountries(value, 'region')
      .subscribe(countries => {this.countries = countries})
  }

}
