import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <div class="container-fluid">
    <h5>Buscar:</h5>
    <div class="d-flex" role="search">
      <input
      class="form-control me-2"
      placeholder="Search gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
      >
      <button class="btn btn-secondary" type="button" (click)="searchTag()">Search</button>
    </div>
  </div>
  `,
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor (private gifService: GifsService ) {}

  // searchTag( newTag: string ): void {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';

  }


}
