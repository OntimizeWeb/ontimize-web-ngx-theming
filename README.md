# ontimize-web-ngx-theming
Ontimize web module for applications theming through '*scss*' files loading .

### Usage
  In your application main style file ('*app.scss*' if you are using ontimize-web pre-built apps) import one of the available themes file for loading its content:
  * If you only want to load a pre-built theme of '*@angular/material*', load one of the following files:
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/md-indigo-pink.scss';`
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/md-deeppurple-amber.scss';`
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/md-pink-bluegrey.scss';`
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/md-purple-green.scss';`
  * Otherwise, if you to load a pre-built theme of '*@angular/material*' and the default preconfigured ontimize style, load one of the following files:
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/o-indigo-pink.scss';`
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/o-deeppurple-amber.scss';`
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/o-pink-bluegrey.scss';`
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/o-purple-green.scss';`
  * Finally if you want to use the default ontimize theme and styles, just load:
    * `@import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';`

  In other case you can define your own theme, and, if you want, use the ontimize styles for a better component rendering including the following lines:
    * `@import '../styles/ontimize-theme-styles.scss';`
    * `@include ontimize-theme-styles($theme);`
