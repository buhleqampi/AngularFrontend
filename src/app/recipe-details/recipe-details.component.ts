import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

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
