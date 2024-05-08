import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedDifficulty: string = 'None';
  selectedMealType: string = 'Breakfast';

  mealTypes: string[] = ['Breakfast', 'Lunch', 'Dinner'];

  filterByDifficulty() {
    // Implement filter logic by difficulty
    console.log('Filtered by difficulty:', this.selectedDifficulty);
  }

  filterByMealType() {
    // Implement filter logic by meal type
    console.log('Filtered by meal type:', this.selectedMealType);
  }
}
