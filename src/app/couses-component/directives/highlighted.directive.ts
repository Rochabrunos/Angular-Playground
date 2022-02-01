import { Directive, Host } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Directive({
  selector: '[appHighlighted]',
})
export class HighlightedDirective {
  constructor(@Host() private coursesService: CoursesService) {
    console.log(`Highlighted directive service Id = ${coursesService.id}`);
  }
}
