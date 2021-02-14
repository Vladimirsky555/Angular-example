import { Injectable } from '@angular/core';
import {Category} from '../Model/Category';
import {Task} from '../Model/Task';
import {TestData} from '../data/TestData';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  // @ts-ignore
  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
  }

  // getCategories(): Category[]{
  //   return TestData.categories;
  // }

  // getTasks(): Task[]{
  //     return TestData.tasks;
  //   }

  // tslint:disable-next-line:typedef
  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  // getTasksByCategory(category: Category): Task[]{
  //   const tasks = TestData.tasks.filter(task => task.category === category);
  //   return tasks;
  // }

  // tslint:disable-next-line:typedef
  fillTasksByCategory(category: Category){
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }

}
