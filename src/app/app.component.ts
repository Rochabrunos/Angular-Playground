import { Component, Inject } from '@angular/core';

import { COURSES_SERVICE_TOKEN } from './couses-component/injection-token/course-service-injection-token';
import { CoursesService } from './couses-component/services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'injectable';
  courses = ['Courses 1', 'Course 2', 'Course 3', 'Course 4'];
  constructor(
    @Inject(COURSES_SERVICE_TOKEN) private coursesService: CoursesService
  ) {
    console.log(`App component service Id = ${coursesService.id}`);
  }
}
