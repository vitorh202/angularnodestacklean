import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TestserviceService } from './my-componet/testservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponetComponent } from './my-componet/my-componet.component';
import { DatabindingtestComponent } from './databindingtest/databindingtest.component';

@NgModule({
  declarations: [AppComponent, MyComponetComponent, DatabindingtestComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TestserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
