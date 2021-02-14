import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Task} from '../../Model/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private dataHandler: DataHandlerService) {

  }

  ngOnInit(): void {
    // this.tasks = this.dataHandler.getTasks();
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
  }

  // tslint:disable-next-line:typedef
  toggleTaskCompleted(task: Task) {
    // tslint:disable-next-line:triple-equals no-unused-expression
    task.completed = !task.completed;
  }
}
