import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject: Subject<boolean> = new Subject();

  constructor() { }


  public toggleAddTask = ():void => {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  public onToggle = (): Observable<boolean> => this.subject.asObservable();
  
}
