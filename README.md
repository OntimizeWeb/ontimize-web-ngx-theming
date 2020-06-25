# ontimize-web-ngx-theming
Ontimize web module for applications theming through '*scss*' files loading .

### Usage
  In your application main style file ('*app.scss*' if you are using ontimize-web pre-built apps) import one of the available themes file for loading its content:
  * If you only want to load a pre-built theme of '*@angular/material*', load one of the following files:
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-indigo-pink.scss';`
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-deeppurple-amber.scss';`
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-pink-bluegrey.scss';`
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-purple-green.scss';`
  * Finally if you want to use the default ontimize theme and styles, just load:
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';`

  In other case you can define your own theme, and, if you want, use the ontimize styles for a better component rendering including the following lines:
    * `@import 'node_modules/ontimize-web-ngx-theming/ontimize-theme.scss';`
    * `@include ontimize-theme-styles($theme);`


  Also, if you want to use compact styles for *'Ontimize Web'* components, you have to include the following lines (theme definition is mandatory, optionally you can add a typography configuration):
  * `@import 'node_modules/ontimize-web-ngx-theming/ontimize-theme-lite.scss';`
  * `@include ontimize-theme-styles-lite($theme);`


  You can create a custom a typography configuration including following files:
  * `// Define a custom typography config that overrides the font-family as well as the headlines and title levels.`
  * `$custom-typography: mat-typography-config( $font-family: 'Nunito Sans', $headline: mat-typography-level(16px, 22px, 400), $title: mat-typography-level(14px, 22px, 500));`

  * `// Define a custom typography config that overrides the header height, row height, header font size header and row of the tables`
  * `$custom-table-typography: ( small-header-height: mat-typography-level(30px, 32px, 400), small-row-height: mat-typography-level(24px, 26px, 400), small-header-font-size: mat-typography-level(12px, 12px, 400), small-row-font-size: mat-typography-level(11px, 11px, 400), medium-header-height: mat-typography-level(30px, 32px, 400), medium-row-height: mat-typography-level(26px, 28px, 400), medium-header-font-size: mat-typography-level(11px, 12px, 300), medium-row-font-size: mat-typography-level(11px, 11px, 400), large-header-height: mat-typography-level(30px, 32px, 400), large-row-height: mat-typography-level(26px, 28px, 400), large-header-font-size: mat-typography-level(11px, 12px, 300), large-row-font-size: mat-typography-level(11px, 11px, 400) );`

  * `// Merge both typographys`
  * `$lite-typography: map-merge($custom-typography, $custom-table-typography);`

  * `// After define theme, it is necessary to transfer typography to Ontimize Web framework and material components`
  * `@import 'node_modules/ontimize-web-ngx/theme.scss';`
  * `@include ontimize-theme-styles-lite($theme, $custom-typography);`
  * `@include o-material-theme($theme, $lite-typography);`






