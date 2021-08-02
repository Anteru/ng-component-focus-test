import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.css']
})
export class InputWrapperComponent implements OnInit {
  @ViewChild('inputField') inputField: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  onClick() {
    this.inputField?.nativeElement.click();
    console.debug('Click triggered');
  }
}
