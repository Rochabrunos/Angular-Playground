import { HttpClient } from '@angular/common/http';
import { CoursesService } from '../couses-component/services/courses.service';

export function coursesServiceFactory(httpClient: HttpClient): CoursesService {
  return new CoursesService(httpClient);
}
