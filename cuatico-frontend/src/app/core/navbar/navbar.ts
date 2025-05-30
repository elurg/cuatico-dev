import { Component } from '@angular/core';
import { Searchbar } from "../searchbar/searchbar";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [Searchbar, RouterModule],
  templateUrl: './navbar.html'
})
export class Navbar {

}
