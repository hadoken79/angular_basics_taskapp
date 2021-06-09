import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl: string = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks = ():Observable<Task[]> => {
    return this.http.get<Task[]>(this.baseUrl); //---<here we need to specify the type were expecting (Task[])
  }

  deleteTask = (task: Task):Observable<Task> => {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  
  updateTask = (task: Task): Observable<Task> => {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.patch<Task>(url, task);
  }

}
