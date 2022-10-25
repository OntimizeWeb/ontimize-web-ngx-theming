<h1 align="center">
  <div style="display:inline-block;vertical-align: middle;">
    <a name="logo" href="https://ontimizeweb.github.io/docs/v8/theming/">
      Ontimize Web Theming
    </a>
  </div>
</h1>

<p align="center">
  <a href="#-introduction">Introduction</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-ideas">Ideas</a> •
  <a href="#gear-development">Development</a>
</p>

## 📜 Introduction

The Ontimize Web Theming is library for web applications based in [OntimizeWeb](https://github.com/OntimizeWeb/ontimize-web-ngx), easing customization of application theming through '*scss*' files

### 📖 Documentation

Check out our [documentation site](https://ontimizeweb.github.io/docs/v8/theming/) to know more details.

## Usage
  In your application main style file ('*app.scss*' if you are using ontimize-web pre-built apps) import one of the available themes file for loading its content:
  * If you only want to load a pre-built theme of '*@angular/material*', load one of the following files:
    ```scss
    @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-indigo-pink.scss';
    @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-deeppurple-amber.scss';
    @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-pink-bluegrey.scss';
    @import 'node_modules/ontimize-web-ngx-theming/src/themes/mat-purple-green.scss';
    ```
  * Finally if you want to use the default ontimize theme and styles, just load:
    ```scss
    @import 'node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss';
    ```

  In other case you can define your own theme, and, if you want, use the ontimize styles for a better component rendering including the following lines:
    ```scss
    @import 'node_modules/ontimize-web-ngx-theming/ontimize-theme.scss';
    @include ontimize-theme-styles($theme);
    ```

  After define theme, it is necessary to transfer color and default typography to Ontimize Web framework(theme definition and default typography are mandatory):

  ```scss
  @import "~ontimize-web-ngx/theme.scss";
  @include o-material-theme($theme, $default-typography);
  ```

  Also, if you want to use compact styles for *'Ontimize Web'* components instead of the previous lines, you have to include the following lines (theme definition is mandatory, optionally you can add a angular material typography configuration):
  ```scss
  @import 'node_modules/ontimize-web-ngx-theming/ontimize-theme-lite.scss';
  @include ontimize-theme-styles-lite($theme, $typography);
  ```


## 💡 Ideas

We would love any feedback you have or to know when you encounter issues, by filing an issue report on this repo.


## :gear: Development

### Build

Run `npm run build` to execute the build process that will generate the dist folder and a .tgz file.
You can use this .tgz file to install the library in your project through the package.json file.





