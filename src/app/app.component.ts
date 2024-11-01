import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amartexchem';

  isSearchHidden = true;

  toggleSearch(): void{
    this.isSearchHidden = !this.isSearchHidden;
  }
}
