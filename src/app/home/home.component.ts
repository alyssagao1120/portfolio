import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import Typewriter from 't-writer.js';
// import SpotifyWebApi from 'spotify-web-api-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit  {

  @ViewChild('tw') typewriterElement;
  greetings: string[] = ['Hello', 'Hey', '你好', 'Hi', 'Bonjour', 'Howdy']
  currMonth: Number = -1;
  lightsURL:string = 'assets/fairy_lights.png';
  greeting:string = '';
  nowPlaying = undefined;
  imgSrc = 'assets/no_lights.png'
  

  constructor() { }

  ngOnInit(): void {
    this.greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
    var d = new Date();
    this.currMonth = d.getMonth() + 1;
    if (this.currMonth === 12){
      this.lightsURL = 'assets/christmas_lights.png'
    }

    this.getNowPlaying();
  }

  ngAfterViewInit() {
    const target = this.typewriterElement.nativeElement

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'black',
      cursorColor: '#C8ABC9',
      deleteSpeed: 20,
      typeSpeed: 100,
      blinkSpeed: 200,
      animateCursor: true,
    })

    writer
    .strings(
      1500,
      "a programmer.", 
      "an avid movie binge-watcher.", 
      "a mediocre valorant gamer.", 
      "a foodie at heart.", 
      "a heavy-emoji user. 🙈🌱✨", 
      "a night owl.", 
      "a Disney fanatic."
    )
    .start()
  }

  getNowPlaying(){
    // this.spotifyApi.getMyCurrentPlaybackState()
    //   .then((response) => {
    //     this.nowPlaying = { 
    //       name: response.item.name, 
    //       albumArt: response.item.album.images[0].url
    //     }
    // });
  }
}
