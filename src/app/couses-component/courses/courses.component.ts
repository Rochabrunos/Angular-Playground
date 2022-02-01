import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'courses-component',
  template: ` <div class="courses" *ngFor="let course of courses">
    <course-card appHighlighted [course]="course"></course-card>
  </div>`,
})
export class CoursesComponent {
  courses = ['Courses 1', 'Course 2', 'Course 3', 'Course 4'];
  constructor(private coursesService: CoursesService) {
    console.log(`Couses component service Id = ${coursesService.id}`);
  }
}
