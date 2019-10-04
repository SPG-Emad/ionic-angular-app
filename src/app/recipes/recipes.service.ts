import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Emad',
      imageUrl: 'https://picsum.photos/id/10/2500/1667',
      ingredients: ['French fries', 'Cow Meat']
    },
    {
      id: 'r2',
      title: 'Danish',
      imageUrl: 'https://picsum.photos/536/354',
      ingredients: ['Spanish fries', 'Andaa']
    },
    {
      id: 'r3',
      title: 'Haris',
      imageUrl: 'https://picsum.photos/536/354',
      ingredients: ['Spanish fries', 'Andaa']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes.splice(this.recipes.findIndex(i => {
      return i.id === recipeId;
    }), 1);
  }
}
