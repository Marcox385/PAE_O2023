import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TokenService } from '../services/token.service';

@Directive({
  selector: '[mRCHLoginStatus]'
})
export class LoginStatusDirective {

  @Input() mRCHLoginStatus: boolean = false;

  constructor(
    private tokenService: TokenService,
    private templateRef: TemplateRef<HTMLElement | any>,
    private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.tokenService.loginStatus.subscribe((status: boolean) => {
      if (status === this.mRCHLoginStatus) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }

}
