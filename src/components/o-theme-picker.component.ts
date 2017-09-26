import { Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ThemeStorageService, StyleManagerService } from '../services';
// import { ThemeStorage, DocsSiteTheme } from './theme-storage/theme-storage';
import { MdButtonModule, MdGridListModule, MdIconModule, MdMenuModule, MdTooltipModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'theme-picker',
  templateUrl: './o-theme-picker.component.html',
  styleUrls: ['./o-theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { 'aria-hidden': 'true' }
})
export class OThemePickerComponent {
  currentTheme;

  themes = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      href: 'deeppurple-amber.css',
      isDark: false,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      href: 'indigo-pink.css',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      href: 'pink-bluegrey.css',
      isDark: true,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      href: 'purple-green.css',
      isDark: true,
    },
  ];

  constructor(
    public StyleManagerService: StyleManagerService,
    private _themeStorage: ThemeStorageService
  ) {
    const currentTheme = this._themeStorage.getStoredTheme();
    if (currentTheme) {
      // this.installTheme(currentTheme);
    }
  }

  // installTheme(theme: DocsSiteTheme) {
  //   this.currentTheme = this._getCurrentThemeFromHref(theme.href);

  //   if (theme.isDefault) {
  //     this.StyleManagerService.removeStyle('theme');
  //   } else {
  //     this.StyleManagerService.setStyle('theme', `assets/${theme.href}`);
  //   }

  //   if (this.currentTheme) {
  //     this._themeStorage.storeTheme(this.currentTheme);
  //   }
  // }

  // private _getCurrentThemeFromHref(href: string): DocsSiteTheme {
  //   return this.themes.find(theme => theme.href === href);
  // }
}

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdGridListModule,
    MdTooltipModule,
    CommonModule
  ],
  exports: [OThemePickerComponent],
  declarations: [OThemePickerComponent],
  providers: [StyleManagerService, ThemeStorageService]
})
export class OThemePickerModule { }
