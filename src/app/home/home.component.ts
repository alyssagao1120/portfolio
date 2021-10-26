import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit  {

  @ViewChild('tw') typewriterElement;
  greetings: string[] = ['Hello', 'Hey', '你好', 'Hi', 'Bonjour']
  greeting:string = '';
  nowPlaying = undefined;
  darkMode: boolean = false;
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkMode$.subscribe(data => this.darkMode = data);
    this.greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
  }

  ngAfterViewInit() {
    const targetLight = this.typewriterElement.nativeElement;
    const targetDark = document.getElementById('twdark');

    console.log(targetLight)
    console.log(targetDark)

    const writerLight = new Typewriter(targetLight, {
      loop: true,
      cursorColor: '#C8ABC9',
      typeColor: 'white',
      deleteSpeed: 20,
      typeSpeed: 100,
      blinkSpeed: 200,
      animateCursor: true,
    })

    writerLight
    .strings(
      1500,
      "a programmer. 💻", 
      "a foodie at heart. 🍜", 
      "a heavy emoji user. 🙈🌱✨",
      "a pineapple on pizza advocate 🍍",
      "an avid movie binge-watcher. 🎬🍿",
      "a mediocre valorant gamer. 🎮",
      "a musical enthusiast. 🎭",
      "a night owl. 🌙", 
      "a Disney fanatic. 🏰"
    ).start()

    const writerDark = new Typewriter(targetDark, {
      loop: true,
      cursorColor: '#C8ABC9',
      deleteSpeed: 20,
      typeSpeed: 100,
      blinkSpeed: 200,
      animateCursor: true,
    })

    writerDark
    .strings(
      1500,
      "a programmer. 💻", 
      "a foodie at heart. 🍜", 
      "a heavy emoji user. 🙈🌱✨",
      "a pineapple on pizza advocate 🍍",
      "an avid movie binge-watcher. 🎬🍿",
      "a mediocre valorant gamer. 🎮",
      "a musical enthusiast. 🎭",
      "a night owl. 🌙", 
      "a Disney fanatic. 🏰"
    ).start()
  }

  public setDarkMode(darkModeOn: boolean):void {
    this.darkMode = darkModeOn;
    console.log(this.darkMode)
  }
}
