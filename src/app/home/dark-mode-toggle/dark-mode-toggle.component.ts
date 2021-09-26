import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggleComponent implements OnInit{

  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  darkModeOn: boolean = false;
  @Output() onDarkModeChosen = new EventEmitter<any>();
  lightsURL:string = 'assets/fairy_lights.png';
  imgSrc = 'assets/no_lights.png';
  currMonth: Number = -1;


  constructor(private darkModeService: DarkModeService) {}
  ngOnInit(): void {
    var d = new Date();
    this.currMonth = d.getMonth() + 1;
    if (this.currMonth === 12){
      this.lightsURL = 'assets/christmas_lights.gif'
    }
  }

  onToggle(): void {
    this.darkModeService.toggle();
    this.darkMode$.subscribe(data => this.darkModeOn = data);
    this.onDarkModeChosen.emit(this.darkModeOn);
    // console.log(this.darkModeOn);
  }
}
