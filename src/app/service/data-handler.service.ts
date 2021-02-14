import { Injectable } from '@angular/core';
import {Category} from '../Model/Category';
import {Task} from '../Model/Task';
import {TestData} from '../data/TestData';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {
  }

  getCategories(): Category[]{
    return TestData.categories;
  }

  getTasks(): Task[]{
    return TestData.tasks;
  }

  getTasksByCategory(category: Category): Task[]{
    const tasks = TestData.tasks.filter(task => task.category === category);
    console.log(tasks);
    return tasks;
  }

}
