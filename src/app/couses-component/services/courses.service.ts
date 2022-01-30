import { HttpClient } from '@angular/common/http';

let counter = 0;

export class CoursesService {
  public id!: number;

  constructor(private http: HttpClient) {
    this.id = counter;
    counter++;
  }
}
