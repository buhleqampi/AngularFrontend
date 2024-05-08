import { Component,OnInit } from '@angular/core';
import { RecipeService } from '../allServices/recipe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private _recipeService : RecipeService,
    private router: Router
  ) {}

  recipes?:any;

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes(): void {
    this._recipeService.getAllRecipes().subscribe({
      next: (res) => {
        this.recipes = res;
      },
    });
  }

  onSelect(_id: number): void {
    this.router.navigate(["/recipe", _id])
  }


  selectedDifficulty: string = 'None';
  selectedMealType: string = 'Breakfast';

  mealTypes: string[] = ['Breakfast', 'Lunch', 'Dinner'];

  filterByDifficulty() {
    // Implement filter logic by difficulty
    console.log('Filtered by difficulty:', this.selectedDifficulty);
  }

  filterByMealType() {
    // Implement filter logic by meal type
    console.log('Filtered by meal type:', this.selectedMealType);
  }
}
