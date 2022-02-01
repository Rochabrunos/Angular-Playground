import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesComponent } from './courses/courses.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CourseCardComponent, CoursesComponent, HighlightedDirective],
  exports: [CoursesComponent],
})
export class CoursesModule {}
