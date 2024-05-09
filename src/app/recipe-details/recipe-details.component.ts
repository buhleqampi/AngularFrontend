import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../allServices/recipe.service';
import { Recipe } from '../allInterfaces/recipe-interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe?: Recipe;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _recipeService: RecipeService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe() {
    const recipeId = this._activatedRoute.snapshot.paramMap.get('id');
    this._recipeService.getAllRecipes().subscribe({
      next: (res) => {
        const recipe = res.find((el: any) => el._id.includes(recipeId));
        this.selectedRecipe = recipe;
      },
      error: console.error
    });
  }

  goBack(){
    this._location.back()
  }

  startTextToSpeech(): void {
    const ingredients = (this.selectedRecipe?.ingredients || '').toString();
    const instructions = (this.selectedRecipe?.instructions || '').toString();
    mRead(ingredients, instructions);
  }
  
}

let confirmationShown: boolean[] = [];

function mRead(ingredients: string, instructions: string): void {
  let synth = window.speechSynthesis;
  synth.cancel();

  let utterance = new SpeechSynthesisUtterance(`Before we get you started, let's make sure you have the following ingredients: ${ingredients}`);
  utterance.rate = 0.9;
  synth.speak(utterance);

  utterance.onend = () => {
    let steps = instructions.split('.');
    let currentStepIndex = 0;

    function speakStep() {
      let currentStep = steps[currentStepIndex].trim();
      if (currentStep) {
        let utterance = new SpeechSynthesisUtterance(`Step ${currentStepIndex + 1}: ${currentStep}. `);
        synth.speak(utterance);
        utterance.onend = () => {
          if (confirm('Continue?')) {
            currentStepIndex++;
            speakStep(); 
          }
        };
      } else {
        let utterance = new SpeechSynthesisUtterance('Cooking complete. Well done!');
        synth.speak(utterance);
      }
    }

    speakStep(); 
  };
}
