import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor( private gifsService: GifsService ) {}

  lastTagSearched: string = '';

  get tagsHistory(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchHistoryTag(tag: string): void {
    if (tag !== this.lastTagSearched) {
      this.lastTagSearched = tag;
    this.gifsService.searchTag(tag);
  }}
}
