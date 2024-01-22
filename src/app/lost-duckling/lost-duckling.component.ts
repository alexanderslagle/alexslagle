import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-lost-duckling',
  templateUrl: './lost-duckling.component.html',
  styleUrls: ['./lost-duckling.component.css']
})
export class LostDucklingComponent implements OnInit {
  project = {} as Project;

  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.project = this.projectService.GetProjectById(0);

  }
}
