import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { coursesServiceFactory } from './factories/course-service-factory';
import { COURSES_SERVICE_TOKEN } from './injection-token/course-service-injection-token';
import { CoursesModule } from './couses-component/courses.module';
import { CoursesService } from './couses-component/services/courses.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoursesModule, HttpClientModule],
  providers: [
    {
      provide: CoursesService,
      useClass: CoursesService
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
