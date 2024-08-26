import { Component } from '@angular/core';
import { DogViewComponent } from '../components/dog-view/dog-view.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [NavbarComponent, DogViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pet-artists';
}

