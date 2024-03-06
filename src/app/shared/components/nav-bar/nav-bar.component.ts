import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Regions } from '../../../countries/interfaces/navBarTypes.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Input() navBarNames: Regions[] = [];
  @Output() emitRegionEvent = new EventEmitter<string>();
  public region: string = '';

  searchRegion(region: string){
    this.emitRegionEvent.emit(region);
    this.region = region;
  }

}
