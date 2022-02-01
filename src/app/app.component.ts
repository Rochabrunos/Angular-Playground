import { Component } from '@angular/core';

import { CoursesService } from './couses-component/services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'injectable';
}
