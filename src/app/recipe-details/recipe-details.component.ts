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
let confirmationShown: boolean[] = [];

function mRead(ingredients: string, instructions: string): void {
  let utterance = new SpeechSynthesisUtterance(`Before we get you started, let's make sure you have the following ingredients: ${ingredients}`);
  utterance.rate = 0.9;

  const synth = window.speechSynthesis;
  synth.cancel();  
  synth.onvoiceschanged = function() {
    let voices = synth.getVoices();
    utterance.voice = voices[2];

    utterance.addEventListener("end", function() {
      let utterance2 = new SpeechSynthesisUtterance(`Shall we begin?`);
      utterance2.voice = voices[2];
      utterance2.rate = 0.8;
      synth.speak(utterance2);

      if (!confirmationShown.includes(false)) {
        const user = confirm("Shall we begin?");
        if (user) {
          confirmationShown = Array(instructions.split(".,").length).fill(false);
          const utterance3 = new SpeechSynthesisUtterance(`Great! Let's begin. ${instructions}`);
          utterance3.voice = voices[2];
          utterance3.rate = 0.8;
          synth.speak(utterance3);

          const ins = instructions.split(".,");
          let counter = 0;

          const inter = setInterval(() => {
            if (!confirmationShown[counter]) {
              const utterance4 = new SpeechSynthesisUtterance(`Step ${counter + 1}, ${ins[counter]}`);
              utterance4.voice = voices[2];
              utterance4.rate = 0.8;
              synth.speak(utterance4);
              confirmationShown[counter] = true;
              utterance4.addEventListener("end", function() {
                confirm("Continue?");
              });
            }
            counter++;
            if (counter === ins.length) {
              clearInterval(inter);
              const utterance5 = new SpeechSynthesisUtterance(`Cooking complete. Well done!`);
              utterance5.voice = voices[2];
              utterance5.rate = 0.8;
              synth.speak(utterance5);
            }
          }, 1500);
        }
      }
    });

    synth.speak(utterance);
  };
}
