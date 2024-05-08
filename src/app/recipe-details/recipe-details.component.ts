import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../allServices/recipe.service';
import { Recipe } from '../allInterfaces/recipe-interface';

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
  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.recipeService.getRecipe(id).subscribe(recipe => this.recipe = recipe);
  // }
}
