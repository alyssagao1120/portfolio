import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError, tap} from "rxjs/operators"; // tap is good for tapping into the pipe, good for debugging
import { IWork } from "./work";
import { IProject } from "./project";

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  private workUrl = 'api/work.json'
  private projectsUrl = 'api/projects.json'

  constructor(private http: HttpClient) {}

    getWork(): Observable<IWork[]> {
        return this.http.get<IWork[]>(this.workUrl).pipe(
            // tap(data => console.log(JSON.stringify(data))),
            // catchError(this.handleError)
        )
    }

    getProjects(): Observable<IProject[]> {
      return this.http.get<IProject[]>(this.projectsUrl).pipe(
          // tap(data => console.log(JSON.stringify(data))),
          // catchError(this.handleError)
      )
   }

    handleError(err: HttpErrorResponse) {
        return throwError("Error in getWork()");
    }
}
