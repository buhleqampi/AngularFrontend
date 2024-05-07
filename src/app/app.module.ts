import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailsComponent,
<<<<<<< HEAD
    HomeComponent
=======
>>>>>>> d3d3aa09b74e480063619033d4818285c9201606
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
