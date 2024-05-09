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
  selectedMealType: string = 'All';

  mealTypes: string[] = ['All','Breakfast', 'Lunch', 'Dinner']; 

  ngOnInit(): void {
    this.getAllRecipes();
    this.filteredRecipes
    console.log(this.recipes)
  }

  getAllRecipes(): void {
    this._recipeService.getAllRecipes().subscribe({
      next: (res) => {
        this.recipes = res;
        this.filteredRecipes = res
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
      console.error("Invalid meal type. Please provide 'Breakfast','Lunch' or 'Dinner'.");
      return [];
  }
  this.filteredRecipes =  this.recipes.filter(recipe => recipe.mealType.includes(mealType));

  console.log(this.filteredRecipes) 
  return this.filteredRecipes
 
}

}
