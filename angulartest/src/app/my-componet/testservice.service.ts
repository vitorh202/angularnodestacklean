import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestserviceService {
  constructor() {}

  getValores() {
    return ['valor1', 'valor2', 'valor3'];
  }
}
