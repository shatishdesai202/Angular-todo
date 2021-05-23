import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../Task';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseURL = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseURL);

    // const tasks = of(Tasks);
    // return tasks;
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.baseURL}/${task.id}`;
    return this.http.delete<Task>(url);

    // const tasks = of(Tasks);
    // return tasks;
  }

  toggleTask(task: Task): Observable<Task> {
    const url = `${this.baseURL}/${task.id}`;
    return this.http.put<Task>(url, task, this.httpOption);

    // const tasks = of(Tasks);
    // return tasks;
  }

  addTask(task: Task): Observable<Task> {
    // const url = `${this.baseURL}/${task.id}`;
    return this.http.post<Task>(this.baseURL, task, this.httpOption);

    // const tasks = of(Tasks);
    // return tasks;
  }
}
