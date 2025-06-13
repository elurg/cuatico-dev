import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserStatsComponent } from '../user-stats/user-stats.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  imports: [RouterModule, UserStatsComponent],
  templateUrl: './profile.html'
})
export class Profile {
  user = {
    name: '',
    email: '',
    phone: '',
    surnames: '',
    username: '',
  };

  private apiUrl = 'http://localhost:8080/api/students/2';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (data) => {
        // Asigna los datos recibidos al objeto user
        this.user = {
          name: data.name,
          email: data.email,
          phone: data.phone,
          surnames: data.surnames,
          username: data.username,
        };
      },
      error: (err) => {
        //console.error('Error al cargar los datos del usuario:', err);
      }
    });
  }

}
