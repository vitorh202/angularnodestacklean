import { Component } from '@angular/core';

@Component({
  selector: 'app-databindingtest',
  templateUrl: './databindingtest.component.html',
  styleUrls: ['./databindingtest.component.css'],
})
export class DatabindingtestComponent {
  url = 'www.google.com';

  getValor() {
    return 1;
  }
}
