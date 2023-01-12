import { Directive ,ElementRef,OnInit,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[CheckNum]'
})
export class CheckNumDirective implements OnInit {
  @Input() defaultValue:any;
  @Input() successColor:any;

  constructor(private eRef:ElementRef) { 
    
  }
  ngOnInit() {
    this.eRef.nativeElement.value=this.defaultValue
  }
  @HostListener('keyup') onkeyup(){
    if(this.eRef.nativeElement.value <0 || this.eRef.nativeElement.value>5){
      this.eRef.nativeElement.style.backgroundColor='red'
    }else{
      this.eRef.nativeElement.style.backgroundColor=this.successColor
    }
  }

}
