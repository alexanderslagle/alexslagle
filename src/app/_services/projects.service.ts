import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "Lost Duckling", summary: "Puzzle game", imagePath: "../../assets/Lost Duckling.png", routerLink: "/portfolio/lost-duckling"},
    {id: 1, name: "Fallen Umbrella", summary: "Platformer", imagePath: "../../assets/Fallen Umbrella.png", routerLink: "/portfolio/fallen-umbrella"},
    {id: 2, name: "Monster Cleaning", summary: "First person shooter", imagePath: "../../assets/Monster Cleaning.png", routerLink: "/portfolio/monster-cleaning"},
    {id: 3, name: "Aliens Defense", summary: "Tap defense", imagePath: "../../assets/Aliens Defense.png", routerLink: "/portfolio/aliens-defense"},
    {id: 4, name: "Hood Search", summary: "Find the hidden objects", imagePath: "../../assets/Hood Search.png", routerLink: "/portfolio/hood-search"},
    {id: 5, name: "An Elf's Tune", summary: "RPG", imagePath: "../../assets/An Elf's Tune.png", routerLink: "/portfolio/an-elfs-tune"},
    {id: 6, name: "House Cat", summary: "Endless runner", imagePath: "../../assets/House Cat.png", routerLink: "/portfolio/house-cat"},
    {id: 7, name: "Battle Ship", summary: "Two-week coding exercise", imagePath: "../../assets/Battle Ship.png", routerLink: "/portfolio/battle-ship"},
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
