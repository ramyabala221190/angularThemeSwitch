import { Component } from '@angular/core';
import { ThemeList } from '../utility';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  themeButtons:{themeName:string,themeType:string}[]=[
    {
      themeName:"Light Theme",
      themeType:ThemeList.LIGHT
    },
    {
      themeName:"Dark Theme",
      themeType:ThemeList.DARK
    }
  ]
}
