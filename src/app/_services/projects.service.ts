import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "Lost Duckling", description: "Puzzle game", platforms: "Apple App Store and Google Play.", role: "Game Designer, Game Programmer, and Project Lead.", imagePath: "../../assets/Lost Duckling.png", routerLink: "/portfolio/lost-duckling",
     summary: "Lost Duckling is a casual puzzle game. The player switches between a pig and a fish to rescue the Lost Duckling.",
      youtubeLink: "https://www.youtube.com/embed/2PDt_ViOF9o", appleAppStoreLink: "https://apps.apple.com/us/app/lost-duckling/id1619563190", googlePlayLink: "https://play.google.com/store/apps/details?id=com.Mobazy.LostDuckling", releasedOnAppStores: true, youtubeHeight: 560, youtubeWidth: 315},
    
    {id: 1, name: "Fallen Umbrella", description: "Platformer", platforms: "Apple App Store and Google Play.", role: "Game Designer and Game Programmer.", imagePath: "../../assets/Fallen Umbrella.png", routerLink: "/portfolio/fallen-umbrella",
    summary: "Fallen Umbrella is a hyper casual platformer. Players click the Umbrella button to flow down gravity.", 
    youtubeLink: "https://www.youtube.com/embed/nujRhsh2zI0", appleAppStoreLink: "https://apps.apple.com/us/app/fallen-umbrella/id1434503750", googlePlayLink: "https://play.google.com/store/apps/details?id=com.ModernPhilosophy.Fallen", releasedOnAppStores: true, youtubeHeight: 560, youtubeWidth: 315},
    
    {id: 2, name: "Monster Cleaning", description: "First person shooter", platforms: "Apple App Store and Google Play.", role: "Game Programmer.", imagePath: "../../assets/Monster Cleaning.png", routerLink: "/portfolio/monster-cleaning",
     summary: " Alex worked with OVIVO Games, Alex was pitched a few game designs and selected one. Alex implemented the game based on a game design document. Alex worked with the Project Manager, Artist, and CEO to bring the game to life.", youtubeLink: "https://www.youtube.com/embed/nqJeoB2njps", appleAppStoreLink: "https://apps.apple.com/us/app/monster-cleaning/id1543320589", googlePlayLink: "https://play.google.com/store/apps/details?id=com.slaglegames.monster", releasedOnAppStores: true, youtubeHeight: 560, youtubeWidth: 315},
    
    {id: 3, name: "Aliens Defense", description: "Tap defense", platforms: "Apple App Store and Google Play.", role: "Game Designer and Game Programmer.", imagePath: "../../assets/Aliens Defense.png", routerLink: "/portfolio/aliens-defense", summary: "",
     youtubeLink: "https://www.youtube.com/embed/4ar9bWELoo0", appleAppStoreLink: "https://apps.apple.com/us/app/aliens-defense/id1531481008", googlePlayLink: "https://play.google.com/store/apps/details?id=com.slaglegames.Aliens", releasedOnAppStores: true, youtubeHeight: 560, youtubeWidth: 315},
    
    {id: 4, name: "Hood Search", description: "Find the hidden objects", platforms: "Apple App Store and Google Play.", role: "Game Designer and Game Programmer.", imagePath: "../../assets/Hood Search.png", routerLink: "/portfolio/hood-search",
     summary: "", youtubeLink: "https://www.youtube.com/embed/vcl3H2VJE9I", appleAppStoreLink: "https://apps.apple.com/us/app/hood-search/id1510119672", googlePlayLink: "https://play.google.com/store/apps/details?id=com.slaglegames.NeighborhoodSearch", releasedOnAppStores: true, youtubeHeight: 560, youtubeWidth: 315},
    
    {id: 5, name: "An Elf's Tune", description: "RPG", platforms: "Unreleased.", role: "Game Designer and Game Programmer.", imagePath: "../../assets/An Elf's Tune.png", routerLink: "/portfolio/an-elfs-tune", summary: "This was a class project we completed in one month.  We were a team of six, Alex did the programming and game development. The team provided me with assets to included in the game, these assets included UI images, sound effects, music, 3d models (the elf), and levels (entire scenes). Alex made animation controllers for the Elf and the Spider.",
     youtubeLink: "https://www.youtube.com/embed/62nXiWq7nNY?si=sSSjAVfIo1opsb6N", appleAppStoreLink: "", googlePlayLink: "", releasedOnAppStores: false, youtubeHeight: 315, youtubeWidth: 560},
    
    {id: 6, name: "House Cat", description: "Endless runner", platforms: "Apple App Store and Google Play, but Alex removed this game from the app stores.", role: "Game Designer and Game Programmer.", imagePath: "../../assets/House Cat.png", routerLink: "/portfolio/house-cat", summary: "This was the first game Alex ever made. The player taps either the left or right half of the screen to move the cat.",
     youtubeLink: "https://www.youtube.com/embed/tNGOJkKDx1E", appleAppStoreLink: "", googlePlayLink: "", releasedOnAppStores: false, youtubeHeight: 560, youtubeWidth: 315},
    
    {id: 7, name: "Battle Ship", description: "Two-week coding exercise", platforms: "Unreleased.", imagePath: "../../assets/Battle Ship.png", role: "Game Designer and Game Programmer.",  routerLink: "/portfolio/battle-ship",
     summary: "", youtubeLink: "https://www.youtube.com/embed/EfPdKr0YzeQ?si=qxUWXKyCAIkO7V72", appleAppStoreLink: "", googlePlayLink: "", releasedOnAppStores: false, youtubeHeight: 315, youtubeWidth: 560},
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
