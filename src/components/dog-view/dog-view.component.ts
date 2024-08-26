import { Component, Input } from '@angular/core';

@Component({
  selector: 'dog-view',
  standalone: true,
  imports: [],
  templateUrl: './dog-view.component.html',
  styleUrl: './dog-view.component.css'
})
export class DogViewComponent {
  @Input() url: string = "";
}
