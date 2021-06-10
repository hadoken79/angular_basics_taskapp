import { Component, Input, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from '../../services/task.service';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private taskservice: TaskService, private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

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

