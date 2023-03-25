import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IIngredient } from 'src/app/classes/ingredient';
import { AppComponent } from '../core/app.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent {
  displayedColumns: string[] = [
    'name',
    'unit',
    'stocked',
    'perishable',
    'calories',
    'price',
  ];

  public dataSource?: MatTableDataSource<IIngredient>;

  constructor(private app: AppComponent) {
    this.app.pageTitle = 'Ingredients';
    this.get_Ingredients();
  }

  ngOnInit() {
  }

  private get_Ingredients(): void {
    this.app.data.get<IIngredient[]>((result) => {
      this.dataSource = new MatTableDataSource<IIngredient>(result);
    }, 'Ingredient');
  }
}
