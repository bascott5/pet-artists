import { Component } from '@angular/core';
import { DogViewComponent } from '../dog-view/dog-view.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServiceService, Breed, Dog } from '../../service/service.service';

interface Options {
  isDog: boolean,
  breed: string | number,
}

@Component({
  selector: 'dog-gallery',
  standalone: true,
  imports: [DogViewComponent, NavbarComponent],
  templateUrl: './dog-gallery.component.html',
  styleUrl: './dog-gallery.component.css'
})
export class DogGalleryComponent {
  constructor(private service: ServiceService) { }
  options: Options = { isDog: true, breed: "" }
  pets: Dog[] = this.service.fetchDogs(false, this.options);
  breeds: Breed[] = this.service.getBreeds(true);
  selection: string = "";

  fetchDogs(replace: boolean, options: Options): void {
    this.pets = this.service.fetchDogs(replace, options);
  }

  likeDog(id: string): void {
    this.service.likeDog(id)
  }

  changeBreeds(isDog: boolean): void {
    this.breeds = this.service.getBreeds(isDog);
  }

  setOptions(option: boolean | string | number): void {
    if (typeof option == "boolean") {
      this.options.isDog = option
    } else {
      this.options.breed = option
    }
  }
}
