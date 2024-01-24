import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  @Input() project = {} as Project;
  constructor() { }

  ngOnInit(): void {
  }

}
