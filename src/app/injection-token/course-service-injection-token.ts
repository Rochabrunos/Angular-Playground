import { InjectionToken } from '@angular/core';
import { CoursesService } from '../couses-component/services/courses.service';

export const COURSES_SERVICE_TOKEN: InjectionToken<CoursesService> =
  new InjectionToken('COURSES_SERVICE_TOKEN');
