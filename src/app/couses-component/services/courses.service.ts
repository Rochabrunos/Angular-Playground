import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoursesModule } from '../courses.module';

let counter = 0;

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  public id!: number;

  constructor(private http: HttpClient) {
    this.id = counter;
    counter++;
  }
}
