import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { EnglishComponent } from './pages/english/english.component';
import { EconomicsComponent } from './pages/economics/economics.component';
import { ComputerapplicationComponent } from './pages/computerapplication/computerapplication.component';
import { TtmComponent } from './pages/ttm/ttm.component';
import { CommerceComponent } from './pages/commerce/commerce.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,EnglishComponent,EconomicsComponent,ComputerapplicationComponent,TtmComponent,CommerceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'school';
}
