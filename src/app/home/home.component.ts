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

  mealTypes: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack']; 

  selectedDifficulty: string = 'None';
  selectedMealType: string = '';

  // Assuming you have an array of recipes
  // recipes: any[] = [
  //   // Your array of recipes
  // ];

  // Function to filter recipes by difficulty
  filterByDifficulty() {
    // Implement your filtering logic here
    console.log("Filtering by difficulty:", this.selectedDifficulty);
    // this.filteredRecipes = this.recipes.filter(recipe => recipe.difficulty === this.selectedDifficulty);
  }

  // Function to filter recipes by meal type
  filterByMealType() {
    // Implement your filtering logic here
    console.log("Filtering by meal type:", this.selectedMealType);
    
    // this.filteredRecipes = this.allRecipes.filter(recipe => recipe.mealType === this.selectedMealType);
  }
}

//   selectedDifficulty: string = 'None';
//   selectedMealType: string = 'Breakfast';

//   mealTypes: string[] = ['Breakfast', 'Lunch', 'Dinner'];

//   filterByDifficulty() {
//     // Implement filter logic by difficulty
//     console.log('Filtered by difficulty:', this.selectedDifficulty);
//   }

//   filterByMealType() {
//     // Implement filter logic by meal type
//     console.log('Filtered by meal type:', this.selectedMealType);
//   }
// }
