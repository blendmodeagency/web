import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HOVER_ELEMENTS } from '../../../conf'

@Component({
  selector: '[blend-cursor]',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit {
  @Input() mainLayer: any;
  private cursorHoverElements: Array<string> = HOVER_ELEMENTS;

  @ViewChild('cursor') cursor: ElementRef;
  constructor() {
  }

  ngOnInit() {
    this.makeCursor();
  }
  makeCursor() {

    this.mainLayer.addEventListener('mousemove', ((event) => {
      const pageCoords = '( ' + event.pageX + ', ' + event.pageY + ' )';
      const clientCoords = '( ' + event.clientX + ', ' + event.clientY + ' )';
      this.cursor.nativeElement.style.top = event.pageY + 'px';
      this.cursor.nativeElement.style.left = event.pageX + 'px';
      const isHoverElement = this.cursorHoverElements.indexOf(event.path[0].tagName) > -1 || event.path[0].classList.contains('custom-cursor')
      if (isHoverElement) {
        if(event.target.classList.contains('color-in')) {
          this.cursor.nativeElement.classList.add('no-hover');
        } else {
          this.cursor.nativeElement.classList.add('hover');
        }
      } else {
          this.cursor.nativeElement.classList.remove('no-hover');
        this.cursor.nativeElement.classList.remove('hover');

      }
    }).bind(this));
    this.mainLayer.addEventListener('click', ((event) => {
      if (this.cursor.nativeElement.classList.contains('hover')) {
        this.cursor.nativeElement.classList.remove('hover');
        setTimeout((() => {
            this.cursor.nativeElement.classList.add('hover');
        }).bind(this), 100);
      }

    }).bind(this));
  }

}
