import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

import { coursesServiceFactory } from '../factories/course-service-factory';
import { COURSES_SERVICE_TOKEN } from '../injection-token/course-service-injection-token';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'course-card',
  templateUrl: 'course-card.component.html',
  styleUrls: ['course-card.component.scss'],
  providers: [
    {
      provide: COURSES_SERVICE_TOKEN,
      useFactory: coursesServiceFactory,
      deps: [HttpClient],
    },
  ],
})
export class CourseCardComponent {
  constructor(
    @Inject(COURSES_SERVICE_TOKEN) private coursesService: CoursesService
  ) {
    console.log(`Card component service Id = ${coursesService.id}`);
  }
}
