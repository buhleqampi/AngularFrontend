import { Component, OnInit ,input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  
  recipe!: Recipe;

  constructor(private _activatedRoute: ActivatedRoute, private _recipeService: RecipeService, private _location: Location,
  ) { }

  
  ngOnInit(): void {

  }

  selectedRecipe?: Recipe


  getRecipe() {
    const recipeId = this._activatedRoute.snapshot.paramMap.get('id');
    this._recipeService.getAllRecipes().subscribe({
      next: (res) => {
        const recipe = res.find((el: any) =>
          el._id.includes(recipeId)
        );

        this.selectedRecipe = this.recipe;
        console.log(this.recipe)
      },
      error: console.log,
    });
  }

playVideo(): void {
  window.open("{{youtubeLink}}", "_blank");
  
}

goBack(): void {
  this._location.back();
}

// startTextToSpeech(): void {
//   const ingredients = {{ingredients}};
//   const instructions = {{instructions}};
//   mRead(ingredients, instructions);
// }
}


// let confirmationShown: boolean[] = [];

// function mRead(ingredients: string, instructions: string): void {
//   let utterance = new SpeechSynthesisUtterance(`Before we get you started, let's make sure you have the following ingredients: ${ingredients}`);
//   utterance.rate = 0.9;

//   const synth = window.speechSynthesis;
//   synth.cancel();  
//   synth.onvoiceschanged = function() {
//     let voices = synth.getVoices();
//     utterance.voice = voices[2];

//     utterance.addEventListener("end", function() {
//       let utterance2 = new SpeechSynthesisUtterance(`Shall we begin?`);
//       utterance2.voice = voices[2];
//       utterance2.rate = 0.8;
//       synth.speak(utterance2);

//       if (!confirmationShown.includes(false)) {
//         const user = confirm("Shall we begin?");
//         if (user) {
//           confirmationShown = Array(instructions.split(".,").length).fill(false);
//           const utterance3 = new SpeechSynthesisUtterance(`Great! Let's begin. ${instructions}`);
//           utterance3.voice = voices[2];
//           utterance3.rate = 0.8;
//           synth.speak(utterance3);

//           const ins = instructions.split(".,");
//           let counter = 0;

//           const inter = setInterval(() => {
//             if (!confirmationShown[counter]) {
//               const utterance4 = new SpeechSynthesisUtterance(`Step ${counter + 1}, ${ins[counter]}`);
//               utterance4.voice = voices[2];
//               utterance4.rate = 0.8;
//               synth.speak(utterance4);
//               confirmationShown[counter] = true;
//               utterance4.addEventListener("end", function() {
//                 confirm("Continue?");
//               });
//             }
//             counter++;
//             if (counter === ins.length) {
//               clearInterval(inter);
//               const utterance5 = new SpeechSynthesisUtterance(`Cooking complete. Well done!`);
//               utterance5.voice = voices[2];
//               utterance5.rate = 0.8;
//               synth.speak(utterance5);
//             }
//           }, 1500);
//         }
//       }
//     });

//     synth.speak(utterance);
//   };


