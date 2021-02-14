import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../Model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private dataHandler: DataHandlerService) {
  }

  // Метод вызывыается автоматически после инициализации компонента
  ngOnInit(): void {
    // this.categories = this.dataHandler.getCategories();
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  // tslint:disable-next-line:typedef
  showTasksByCategory(category: Category) {
    // this.dataHandler.getTasksByCategory(category);
    this.dataHandler.fillTasksByCategory(category);
  }
}
