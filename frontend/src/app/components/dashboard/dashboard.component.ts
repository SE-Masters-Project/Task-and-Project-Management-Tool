import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule], // ✅ This fixes *ngFor error
  providers: [ProjectService]
})
export class DashboardComponent implements OnInit {
  projects: any[] = [];
  private projectService = inject(ProjectService);

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      (data: any) => {
        this.projects = data;
      },
      (error: any) => {
        console.error('Error fetching projects', error);
      }
    );
  }
}
