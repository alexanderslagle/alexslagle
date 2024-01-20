import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "Lost Duckling", summary: "Summary - Made w Unity :)", imagePath: "../../assets/Lost Duckling.png",},
    {id: 1, name: "Fallen Umbrella", summary: "Summary - Made w Unity :)", imagePath: "../../assets/Fallen Umbrella.png"},
    {id: 2, name: "Monster Cleaning", summary: "Summary - Made w Unity :)", imagePath: "../../assets/Monster Cleaning.png"},
    {id: 3, name: "Aliens Defense", summary: "Summary - Made w Unity :)", imagePath: "../../assets/Aliens Defense.png"},
    {id: 4, name: "Hood Search", summary: "Summary - Made w Unity :)", imagePath: "../../assets/Hood Search.png"},
  ];
  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project{
    return this.projects[id];
  }

  GetFeaturedProject() : Project{
    return this.projects[0];
  }

}
