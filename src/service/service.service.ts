import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';

export interface Dog {
  id: string,
  url: string,
  width: number,
  height: number,
  breeds: Breed[],
  liked: boolean
}

export interface Breed {
  id: string | number,
  name: string,
}

interface Options {
  isDog: boolean,
  breed: string | number,
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiDogKey = environment.apiDogKEY;
  private apiCatKey = environment.apiCatKEY
  private pets: Dog[] = new Array;
  private breeds: Breed[] = new Array;
  constructor(private http: HttpClient) { }

  fetchDogs(replace: boolean, options: Options): Dog[] {
    this.http.get<Dog[]>(`https://api.${options.isDog ? "thedogapi" : "thecatapi"}.com/v1/images/search?api_key=${options.isDog ? this.apiDogKey : this.apiCatKey}&size=med&mime_types=jpg&format=json&has_breeds=true${options.breed != "" ? "&breed_ids=" + options.breed : null}&order=RANDOM&limit=20`)
    .subscribe(data => replace ? data.map(pet => this.pets.unshift(pet)) : data.map(pet => this.pets.push(pet)))
    return this.pets;
  }

  getBreeds(isDog: boolean): Breed[] {
    /*this.http.get<Breed[]>(`https://api.${isDog ? "thedogapi" : "thecatapi"}.com/v1/breeds/`)
    .subscribe(data => {
      data.map((breed, i) => {
        console.log(breed)
        this.breeds[i] = breed;
      });
      this.breeds = this.breeds
    })*/

    if (isDog) {
      this.breeds = new Array(85)
      const dogs = ["Great Dane", "Great Pyrenees", "Greyhound", "Griffon Bruxellois", "Harrier", "Havanese", "Irish Setter", "Irish Terrier", "Irish Wolfhound", "Italian Greyhound", "Japanese Chin", "Japanese Spitz", "Keeshond", "Komondor", "Kooikerhondje", "Kuvasz", "Labrador Retriever", "Lagotto Romagnolo", "Lancashire Heeler", "Leonberger", "Lhasa Apso", "Maltese", "Miniature American Shepherd", "Miniature Pinscher", "Miniature Schnauzer", "Newfoundland", "Norfolk Terrier", "Norwich Terrier", "Nova Scotia Duck Tolling Retriever", "Old English Sheepdog", "Olde English Bulldogge", "Papillon", "Pekingese", "Pembroke Welsh Corgi", "Perro de Presa Canario", "Pharaoh Hound", "Plott", "Pomeranian", "Poodle (Miniature)", "Poodle (Toy)", "Pug", "Puli", "Pumi", "Rat Terrier", "Redbone Coonhound", "Rhodesian Ridgeback", "Rottweiler", "Russian Toy", "Saint Bernard" , "Saluki", "Samoyed","Schipperke", "Scottish Deerhound", "Scottish Terrier", "Shetland Sheepdog", "Shiba Inu", "Shih Tzu", "Shiloh Shepherd", "Siberian Husky", "Silky Terrier", "Smooth Fox Terrier", "Soft Coated Wheaten Terrier", "Spanish Water Dog", "Spinone Italiano", "Staffordshire Bull Terrier", "Standard Schnauzer", "Swedish Vallhund", "Thai Ridgeback", "Tibetan Mastiff", "Tibetan Spaniel", "Tibetan Terrier", "Toy Fox Terrier", "Treeing Walker Coonhound", "Vizsla", "Weimaraner", "Welsh Springer Spaniel", "West Highland White Terrier", "Whippet", "White Shepherd", "Wire Fox Terrier", "Wirehaired Pointing Griffon", "Wirehaired Vizsla", "Xoloitzcuintli", "Yorkshire Terrier"];
      for (let i = 0; i < this.breeds.length - 1; i++) {
        this.breeds[i] = { id: i + 124, name: dogs[i] }
      }
      this.breeds.pop()
    } else {
      this.breeds = new Array(172)
      this.breeds = [{ id: "abys", name: "Abyssinian" }, { id: "aege", name: "Aegean"}, { id: "abob", name: "American Bobtail"}, { id: "acur", name: "American Curl"}, { id: "asho", name: "American Shorthair"}, { id: "awir", name: "American Wirehair"}, { id: "amau", name: "Arabian Mau" }, { id: "amis", name: "Australian Mist"}, { id: "bali", name: "Balinese"}, { id: "bamb", name: "Bambino"}, { id: "beng", name: "Bengal"}, { id: "birm", name: "Birman"}, { id: "bomb", name: "Bombay" }, { id: "bslo", name: "British Longhair" }, { id: "bsho", name: "British Shorthair" }, { id: "bure", name: "Burmese" }, { id: "buri", name: "Burmilla" }, { id: "cspa", name: "California Spangled" }, { id: "ctif", name: "Chantilly-Tiffany" }, { id: "char", name: "Chartreux" }, { id: "chau", name: "Chausie" }, { id: "chee", name: "Cheetoh" }, { id: "csho", name: "Colorpoint Shorthair" }, { id: "crex", name: "Cornish Rex" }, { id: "cymr", name: "Cymric" }, { id: "cypr", name: "Cyprus" }, { id: "drex", name: "Devon Rex" }, { id: "dons", name: "Donskoy" }, { id: "lihu", name: "Dragon Li" }, { id: "emau", name: "Egyptian Mau" }, { id: "ebur", name: "European Burmese" }, { id: "esho", name: "Exotic Shorthair" }, { id: "hbro", name: "Havana Brown" }, { id: "hima", name: "Himalayan" }, { id: "jbob", name: "Japanese Bobtail" }, { id: "java", name: "Javanese" }, { id: "khao", name: "Khao Manee" }, { id: "kora", name: "Korat" }, { id: "kuri", name: "Kurilian" }, { id: "lape", name: "LaPerm" }, { id: "mcoo", name: "Maine Coon" }, { id: "mala", name: "Malayan" }, { id: "manx", name: "Manx" }, { id: "munc", name: "Munchkin" }, { id: "nebe", name: "Nebelung" }, { id: "norw", name: "Norwegian Forest Cat" }, { id: "oric", name: "Ocicat" }, { id: "orie", name: "Oriental" }, { id: "pers", name: "Persian" }, { id: "pixi", name: "Pixie-bob" }, { id: "raga", name: "Ragamuffin" }, { id: "ragd", name: "Ragdoll" }, { id: "rblu", name: "Russian Blue" }, { id: "sava", name: "Savannah" }, { id: "sfol", name: "Scottish Fold" }, { id: "srex", name: "Selkirk Rex" }, { id: "siam", name: "Siamese" }, { id: "sibe", name: "Siberian" }, { id: "sing", name: "Singapura" }, { id: "snow", name: "Snowshoe" }, { id: "soma", name: "Somali" }, { id: "sphy", name: "Sphynx" }, { id: "tonk", name: "Tonkinese" }, { id: "toyg", name: "Toyger" }, { id: "tang", name: "Turkish Angora" }, { id: "tvan", name: "Turkish Van" }, { id: "ycho", name: "York Chocolate" }];
    }

    console.log(this.breeds)
    return this.breeds
  }

  likeDog(id: string): void {
    let duplicates: number[] = [];
    this.pets.map((pet, i) => { 
      if (id == pet.id) {
        pet.liked = !pet.liked;
      }

      if (i != 0 && pet.id == this.pets[i - 1].id) {
        duplicates.push(i);
      } 
    });

    for (let i = 0; i < duplicates.length - 1; i++) {
      this.pets.splice(i, 1);
    }
  }
}