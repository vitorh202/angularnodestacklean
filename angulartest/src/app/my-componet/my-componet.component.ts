import { Component, OnInit } from '@angular/core';
import { TestserviceService } from './testservice.service';

@Component({
  selector: 'app-my-componet',
  templateUrl: './my-componet.component.html',
  styleUrls: ['./my-componet.component.css'],
})
export class MyComponetComponent implements OnInit {
  title = 'ola mundo';
  test: string[];

  constructor(private testservice: TestserviceService) {
    this.test = this.testservice.getValores();
  }

  ngOnInit() {}
}
