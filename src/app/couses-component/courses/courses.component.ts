import { Component } from '@angular/core';
import { COURSES_SERVICE_TOKEN } from 'src/app/injection-token/course-service-injection-token';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'courses-component',
  template: ` <div class="courses" *ngFor="let course of courses">
    <course-card [course]="course"></course-card>
  </div>`,
  providers: [
    {
      provide: CoursesService,
      useClass: CoursesService,
    },
  ],
})
export class CoursesComponent {
  courses = ['Courses 1', 'Course 2', 'Course 3', 'Course 4'];
  constructor(private coursesService: CoursesService) {
    console.log(`Couses component service Id = ${coursesService.id}`);
  }
}
