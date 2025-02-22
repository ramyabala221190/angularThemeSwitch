import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { ThemeList } from './utility';

@Directive({
  selector: '[appThemeSwitcher]'
})
export class ThemeSwitcherDirective {

  constructor(@Inject(DOCUMENT)private document:Document,private renderer:Renderer2){}

  @Input('theme')theme:string= ThemeList.LIGHT; //default or based on user preferences can be retrieved from service

  @HostListener('click',['$event']) onSwitch(evt:Event){
     this.switchTheme(); 
  }

  switchTheme(){
    this.renderer.setAttribute(this.document.body,'color-theme',this.theme) //switch the <body> attribute
  }

 
}
