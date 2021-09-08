import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IWork } from "./work";
import { IProject } from "./project";
import { ExperienceService } from './experience.service'

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

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
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

    console.log(this.projects)
    console.log(this.work)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
