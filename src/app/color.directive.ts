import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elref:ElementRef) { 
    this.elref.nativeElement.style.color='blue'
  }

}
