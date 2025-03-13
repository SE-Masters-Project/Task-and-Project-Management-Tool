import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true, // ✅ Standalone component
  imports: [FormsModule] // ✅ Fixes ngModel error
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.name, this.email, this.password).subscribe(
      response => {
        this.router.navigate(['/']);
      },
      error => console.error('Registration failed', error)
    );
  }
}
