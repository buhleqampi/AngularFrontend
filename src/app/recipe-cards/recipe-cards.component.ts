import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.css']
})

export class RecipeCardsComponent {
  @Input() recipes: any[] | undefined;


  constructor() { }

  showMoreDetails(recipe: any) {
    // Implement showMoreDetails functionality here
  
  }
}

   