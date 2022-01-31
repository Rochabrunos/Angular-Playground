import { HttpClient } from '@angular/common/http';
import { Component, Input, SkipSelf } from '@angular/core';

import { coursesServiceFactory } from '../../factories/course-service-factory';
import { COURSES_SERVICE_TOKEN } from '../../injection-token/course-service-injection-token';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'course-card',
  templateUrl: 'course-card.component.html',
  styleUrls: ['course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course!: string;
  constructor(private coursesService: CoursesService) {
    console.log(`Card component service Id = ${coursesService.id}`);
  }
}
