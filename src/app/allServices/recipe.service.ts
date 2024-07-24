import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../allInterfaces/recipe-interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
   apiUrl = 'http://localhost:4000/recipes/get-all-recipes'; 

  constructor(private _http: HttpClient) { }

getAllRecipes():Observable<Recipe[]> {
  return this._http.get<Recipe[]>(this.apiUrl)
}

  getRecipe(id: number): Observable<Recipe> {
    return this._http.get<Recipe>(`${this.apiUrl}/${id}`);
  }
}
