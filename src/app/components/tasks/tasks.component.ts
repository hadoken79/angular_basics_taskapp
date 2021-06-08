import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask = (task: Task): void => {
    this.taskservice.deleteTask(task).subscribe(() => {
      this.taskservice.getTasks().subscribe(tasks => this.tasks = tasks);
    });
  }
}
