import { Injectable } from '@angular/core';
import {Category} from '../Model/Category';
import {Task} from '../Model/Task';
import {TestData} from '../data/TestData';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new Subject<Task[]>();

  constructor() {
  }

  getCategories(): Category[]{
    return TestData.categories;
  }

  // getTasks(): Task[]{
  //     return TestData.tasks;
  //   }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  // getTasksByCategory(category: Category): Task[]{
  //   const tasks = TestData.tasks.filter(task => task.category === category);
  //   return tasks;
  // }

  fillTasksByCategory(category: Category){
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }

}
