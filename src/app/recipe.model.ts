export interface Recipe {
    name: string;
    image: string;
    difficulty: string;
    rating: number;
    voice: SpeechSynthesisVoice
    youtubeLink: string;
    mealType: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    ingredients: string;
    instructions: string;
    caloriesPerServing: number;
  }
  