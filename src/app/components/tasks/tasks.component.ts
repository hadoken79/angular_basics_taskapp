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
    this.initTasks();
  }

  deleteTask = (task: Task): void => {
    this.taskservice.deleteTask(task).subscribe(() => {
      this.initTasks();
    });
  }

  updateTask = (task: Task) => {
    this.tasks.map(t => t.id !== task.id ? task : t); //edit local array first
    this.taskservice.updateTask(task).subscribe(() => this.initTasks());
  }

  initTasks = () => this.taskservice.getTasks().subscribe(tasks => this.tasks = tasks);
}
