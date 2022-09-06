import { HtmlTagDefinition } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
})
export class PublicationComponent implements OnInit, AfterViewInit {
  constructor() {}

  @Input() image?: string;
  @Input() title: string = '[generic title]';
  @Input() date?: string;
  @Input() text: string = '[]';
  @Input() link?: string;
  @Input() tags: string = '';

  public tagsArray: string[] = [];
  public textArray: string[] = [];
  public longText?: boolean;
  public showLongText: boolean = false;

  public textClasses: string[] = [];
  public textClassesString: string = 'text-hidden';

  @ViewChild('txtSpan') textSpan!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.tagsArray = this.tags.split(',');
    this.textArray = this.text.split('//');
    this.longText = this.text.length > 800;
  }

  ngAfterViewInit() {
    this.validateLongPost();
  }

  toggleShowPost() {
    this.showLongText = !this.showLongText;
    this.validateLongPost();
  }

  validateLongPost() {
    if (!this.showLongText && this.longText) {
      this.textClasses.push('text-hidden');
      this.updateTextClasses();
    } else {
      this.textClasses.pop();
      this.updateTextClasses();
    }
    console.log(this.textClasses);
    console.log(this.textClassesString);
  }

  updateTextClasses() {
    this.textClassesString = this.textClasses.join(' ');
  }
}
