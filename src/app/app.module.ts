import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoursesModule } from './couses-component/courses.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoursesModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
