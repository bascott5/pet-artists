import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Dog } from '../../service/service.service';
import { DogViewComponent } from '../../components/dog-view/dog-view.component';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [DogViewComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  pets: Dog[] = this.fetchDogs();
  selection: string = ""
  isEmpty: boolean = this.pets.every(pet => !pet.liked) 
  constructor (private service: ServiceService) {}
  
  fetchDogs(): Dog[] {
    return this.service.fetchDogs(false, { isDog: false, breed: ""})
  }

  likeDog(id: string): void {
    this.service.likeDog(id)
  }

  ngOnInit() {
    this.isEmpty = this.pets.every(pet => !pet.liked)
  }
}
