import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'entreprise';

  ngOnInit(): void {
    //On Init data table start
  }
  //On Init data  table fin
}
