import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { IWork } from "./work";
import { IProject } from "./project";
import { ExperienceService } from './experience.service'
import { DarkModeService } from "angular-dark-mode";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  work: IWork[] = [];
  projects: IProject[] = []
  errorMessage: string = 'Error in retrieving items';
  sub!: Subscription;
  imgSrc='assets/plants_off.png'
  darkMode: boolean = false;
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private experienceService: ExperienceService, private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkMode$.subscribe(data => this.darkMode = data);
    this.sub = this.experienceService.getWork().subscribe({
      next: work => {
          this.work = work;
      },
      error: err => this.errorMessage = err
    })

    this.sub = this.experienceService.getProjects().subscribe({
      next: projects => {
          this.projects = projects;
      },
      error: err => this.errorMessage = err
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
