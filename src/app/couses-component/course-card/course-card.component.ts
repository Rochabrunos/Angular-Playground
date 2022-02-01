import { Component, Input } from '@angular/core';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'course-card',
  templateUrl: 'course-card.component.html',
  styleUrls: ['course-card.component.scss'],
  providers: [CoursesService],
})
export class CourseCardComponent {
  @Input() course!: string;
  constructor(private coursesService: CoursesService) {
    console.log(`Card component service Id = ${coursesService.id}`);
  }
}
