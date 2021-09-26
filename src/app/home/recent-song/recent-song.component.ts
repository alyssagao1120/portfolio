import { Component, OnInit } from '@angular/core';
import { ISong } from "./song";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recent-song',
  templateUrl: './recent-song.component.html',
  styleUrls: ['./recent-song.component.css']
})
export class RecentSongComponent implements OnInit {
  recentSong!: ISong;
  private url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=alyssagao&api_key=41f4e0cbba0067a42455c24badfe015c&format=json&limit=1'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.url).subscribe(data => {
        const song = data.recenttracks.track[0];
        this.recentSong = {
          title: song.name,
          artist: song.artist['#text'],
          songLink: song.url,
          imageSrc: song.image[2]['#text']
        }
    })
  }

}
