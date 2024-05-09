import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../allServices/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../allInterfaces/recipe-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private _recipeService: RecipeService,
    private router: Router
  ) {}

  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];

  selectedDifficulty: string = 'None';
  selectedMealType: string = '';

  mealTypes: string[] = ['Breakfast', 'Lunch', 'Dinner']; 

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

  onSelect(id: string): void {
    // Navigate to recipe details page
    this.router.navigate(['/recipe', id]);
  }


filterByMealType(mealType: string): Recipe[] {
  const validMealTypes = ["Breakfast","Lunch","Dinner"];
    
  if (!validMealTypes.includes(mealType)){
      console.error("Invalid meall type. Please provide 'Breakfast','Lunch' or 'Dinner'.");
      return [];
  }
  const filtered =  this.recipes.filter(recipe => recipe.mealType.includes(mealType));

  console.log(filtered) 
  this.recipes = filtered
  return filtered
 
}

}
