import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { coursesServiceFactory } from './couses-component/factories/course-service-factory';
import { COURSES_SERVICE_TOKEN } from './couses-component/injection-token/course-service-injection-token';
import { CoursesModule } from './couses-component/courses.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoursesModule, HttpClientModule],
  providers: [
    {
      provide: COURSES_SERVICE_TOKEN,
      useFactory: coursesServiceFactory,
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
