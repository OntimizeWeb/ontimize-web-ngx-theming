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

  After define theme, it is necessary to transfer color and default typography to Ontimize Web framework(theme definition and default typography are mandatory):

  * `@import "~ontimize-web-ngx/theme.scss";`
  * `@include o-material-theme($theme, $default-typography);`

  Also, if you want to use compact styles for *'Ontimize Web'* components instead of the previous lines, you have to include the following lines (theme definition is mandatory, optionally you can add a angular material typography configuration):
  * `@import 'node_modules/ontimize-web-ngx-theming/ontimize-theme-lite.scss';`
  * `@include ontimize-theme-styles-lite($theme, $typography);`
