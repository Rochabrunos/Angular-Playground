import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CourseCardComponent, CoursesComponent],
  exports: [CoursesComponent],
  providers: [CoursesComponent],
})
export class CoursesModule {}
