import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  private liked: string[] = [] 
  constructor() { }

  getLikes(): string[] {
    return this.liked
  }

  addLike(liked: string): void {
    this.liked.push(liked)
  }
}
