import { Routes } from '@angular/router';
import { DrawComponent } from '../pages/draw/draw.component';
import { DogGalleryComponent } from '../components/dog-gallery/dog-gallery.component';
import { FavoritesComponent } from '../pages/favorites/favorites.component';

export const routes: Routes = [
  { path: "", component: DogGalleryComponent },
  { path: "draw", component: DrawComponent },
  { path: "favorites", component: FavoritesComponent }
]