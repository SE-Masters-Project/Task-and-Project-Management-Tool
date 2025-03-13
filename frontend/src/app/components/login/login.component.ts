import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true, // ✅ Standalone component
  imports: [FormsModule] // ✅ Fixes ngModel error
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  login(): void {
    console.log('Logging in with:', this.email, this.password);
  }
}
