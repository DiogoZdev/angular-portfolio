import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
})
export class PublicationComponent implements OnInit {
  constructor() {}

  @Input() image: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() text: string = '';
  @Input() link?: string;
  @Input() tags: string = '';

  public tagsArray: string[] = [];
  public textArray: string[] = [];

  ngOnInit(): void {
    this.tagsArray = this.tags.split(',');
    this.textArray = this.text.split('//');
  }
}
