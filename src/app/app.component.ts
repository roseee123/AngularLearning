import { Component } from '@angular/core';
import { stationList} from './station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'HelloAngular';
  list = stationList;
}
