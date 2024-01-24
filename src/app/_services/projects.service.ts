import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "Lost Duckling", description: "Puzzle game", imagePath: "../../assets/Lost Duckling.png", routerLink: "/portfolio/lost-duckling", summary: "Lost Duckling is a casual puzzle game. The player switches between a pig and a fish to rescue the Lost Duckling.", youtubeLink: "https://www.youtube.com/embed/2PDt_ViOF9o"},
    {id: 1, name: "Fallen Umbrella", description: "Platformer", imagePath: "../../assets/Fallen Umbrella.png", routerLink: "/portfolio/fallen-umbrella", summary: "Fallen Umbrella is a hyper casual platformer. Players click the Umbrella button to flow down gravity.", youtubeLink: "https://www.youtube.com/embed/nujRhsh2zI0"},
    {id: 2, name: "Monster Cleaning", description: "First person shooter", imagePath: "../../assets/Monster Cleaning.png", routerLink: "/portfolio/monster-cleaning", summary: "", youtubeLink: "https://www.youtube.com/embed/nqJeoB2njps"},
    {id: 3, name: "Aliens Defense", description: "Tap defense", imagePath: "../../assets/Aliens Defense.png", routerLink: "/portfolio/aliens-defense", summary: "", youtubeLink: "https://www.youtube.com/embed/4ar9bWELoo0"},
    {id: 4, name: "Hood Search", description: "Find the hidden objects", imagePath: "../../assets/Hood Search.png", routerLink: "/portfolio/hood-search", summary: "", youtubeLink: "https://www.youtube.com/embed/vcl3H2VJE9I"},
    {id: 5, name: "An Elf's Tune", description: "RPG", imagePath: "../../assets/An Elf's Tune.png", routerLink: "/portfolio/an-elfs-tune", summary: "", youtubeLink: "https://www.youtube.com/embed/2PDt_ViOF9o"},
    {id: 6, name: "House Cat", description: "Endless runner", imagePath: "../../assets/House Cat.png", routerLink: "/portfolio/house-cat", summary: "", youtubeLink: "https://www.youtube.com/embed/2PDt_ViOF9o"},
    {id: 7, name: "Battle Ship", description: "Two-week coding exercise", imagePath: "../../assets/Battle Ship.png", routerLink: "/portfolio/battle-ship", summary: "", youtubeLink: "https://www.youtube.com/embed/2PDt_ViOF9o"},
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
