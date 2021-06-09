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

  toggleRminder = (task: Task) => {
    task.reminder = !task.reminder;
    this.taskservice.updateTask(task).subscribe(() => this.initTasks(), error => {
      console.log({'Trouble in UpdateTask': error});
    });
  }

  initTasks = () => this.taskservice.getTasks().subscribe(tasks => {
    this.tasks = tasks
  }, error => console.log(error));

  addTask = (task: Task) => {
    this.taskservice.addTask(task).subscribe(task => this.tasks.push(task), error => {
      console.log({'Trouble in addTask': error});
    })
  }
}

