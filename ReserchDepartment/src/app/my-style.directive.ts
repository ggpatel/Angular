import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'crimson';
  }
}

