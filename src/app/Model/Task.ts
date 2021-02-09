import {Priority} from "./Priority";
import {Category} from "./Category";

export class Task {
  id: number;
  title: string;
  complited: boolean;
  priority?: Priority;//необязательное поле
  category?: Category;
  date?: Date;


  constructor(id: number, title: string, complited: boolean, priority?: Priority, category?: Category, date?: Date) {
    this.id = id;
    this.title = title;
    this.complited = complited;
    this.priority = priority;
    this.category = category;
    this.date = date;
  }
}