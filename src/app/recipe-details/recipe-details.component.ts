import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
declare var SpeechSynthesisUtterance: any;


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  // recipe!: Recipe;

  // constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }
ngOnInit(): void {
  
}

playVideo(): void {
  window.open("https://www.youtube.com/watch?v=joGKYTGbVw8", "_blank");
}

startTextToSpeech(): void {
  const ingredients = "Pizza dough, Tomato sauce, Fresh mozzarella cheese, Fresh basil leaves, Olive oil, Salt and pepper";
  const instructions = "Preheat the oven to 475°F (245°C).,Roll out the pizza dough and spread tomato sauce evenly.,Top with slices of fresh mozzarella and fresh basil leaves.,Drizzle with olive oil and season with salt and pepper.,Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.,Slice and serve hot.";
  mRead(ingredients, instructions);
}



  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.recipeService.getRecipe(id).subscribe(recipe => this.recipe = recipe);
  // }
}
function mRead(ingredients: string, instructions: string) {
  throw new Error('Function not implemented.');
}

