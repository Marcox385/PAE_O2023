import { Directive, Input, OnChanges, OnInit, SimpleChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[mRCHHighlight]'
})
export class HighlightDirective implements OnInit, OnChanges {

  @Input('appHighlight') mRCHHighlight: boolean = false;

  constructor(private elRef: ElementRef) {
    console.log('Status: ', this.mRCHHighlight);
  }

  ngOnInit() {
    console.log('Status: ', this.mRCHHighlight);
    console.log('Element: ', this.elRef.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Status: ', this.mRCHHighlight);

    this.elRef.nativeElement.style.backgroundColor = (this.mRCHHighlight) ? 'lightblue' : 'transparent';
  }

}
