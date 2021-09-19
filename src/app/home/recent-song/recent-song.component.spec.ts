import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSongComponent } from './recent-song.component';

describe('RecentSongComponent', () => {
  let component: RecentSongComponent;
  let fixture: ComponentFixture<RecentSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
