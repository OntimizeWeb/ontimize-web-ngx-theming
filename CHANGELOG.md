# 8.4.1 (2022-12-19)
* **o-phone-input**: Fixed the height of the `o-phone-input` is not same than other input component with theme lite ([5e522c0](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/5e522c0)) Closes [#1079](https://github.com/OntimizeWeb/ontimize-web-ngx/issues/1079)

# 8.4.0 (2022-10-25)
## BREAKING CHANGES
Resolving breaking changes of ontimize-web-ngx related to the issue https://github.com/OntimizeWeb/ontimize-web-ngx/issues/1044 of allowing custom toolbar content to be added to the `o-table`, `o-list` and `o-table` components.

# 8.3.0 (2022-06-22)
### Features
* **styles:**:
  * Added new styles for '*ontimize-web-ngx-report@8.0.0*'

# 8.2.2 (2022-05-11)
### Bug fixes
* **o-combo**: Fixed the height of the o-combo is not same than other input component with theme lite ([8d6024a](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/8d6024a)) Closes [#53](https://github.com/OntimizeWeb/ontimize-web-ngx/issues/53)
* Fixed unexpected shorthand "border-radius" after "border-top-right-radius" ([fbb8cce](https://github.com/OntimizeWeb/ontimize-web-ngx/commit/fbb8cce)) Closes [#57](https://github.com/OntimizeWeb/ontimize-web-ngx/issues/57)
* Replace an invalid pseudo class `:label-shown` by a valid `:placeholder-shown` pseudo class ([43d385d](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/43d385d)) Closes [#55](https://github.com/OntimizeWeb/ontimize-web-ngx/issues/55)

# 8.2.1 (2022-03-22)
### Bug fixes
* Fixing bug in input placeholder overlapping ([34ecd5d](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/34ecd5d))
* **Fashion theme**
  * Fixed hover styles in the buttons with class mat-accent ([6d8d9e](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/6d8d9e))
  * Set border in buttons without text in the form, grid and table toolbar([52dca9](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/52dca9))

# 8.2.0 (2022-03-04)
### Features
  * New **fashion theme** available only in light mode

# 8.1.0 (2021-09-09)
### Features
* **styles:**:
  * Updated styles for '*ontimize-web-ngx@8.5.0*'
  * Set Poppins the default application font ([9698684](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/9698684))

### BREAKING CHANGES
* **preconfigured themes**:
  * New color values from a theme ontimize.scss ([d3d97cf](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/d3d97cf))
  * Replace latest version of ontimize.scss with ontimize-black-yellow.scss  ([814e9f5](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/814e9f5))
* **ontimize-theme-styles**: adding '*default-typography*' parameter for overriding default angular material typography ([fead731](https://github.com/OntimizeWeb/ontimize-web-ngx/commit/fead731))

### Bug Fixing
* **styles**: fix table filter icon alignment.

# 8.0.1 (2021-02-26)
### Features
* **styles:**:
  * Updated styles for '*ontimize-web-ngx@8.2.0*'

# 8.0.0 (2020-11-30)
### Features
* **styles:**:
  * Updated styles for '*ontimize-web-ngx@8.0.0*'

# 4.0.2 (2019-04-04)
### Features
* **styles:**:
  * Updated styles for '*ontimize-web-ngx@4.0.2*'

# 4.0.1 (2019-03-06)
### Features
* **styles:**:
  * Updated styles for '*ontimize-web-ngx@4.0.1*'

# 4.0.0 (2019-02-19)
### Features
* **styles:**:
  * Updated styles for '*ontimize-web-ngx@4.0.0*'
  * Several improvements on Ontimize `Lite Theme`

# 4.0.0-rc.1 (2019-01-16)
### Features
* **styles:** updating styles for '*ontimize-web-ngx@4.0.0-rc.1*'

# 4.0.0-rc.0 (2018-11-16)
### Features
* **styles:** updating styles for '*ontimize-web-ngx@4.0.0-rc.0*'

# 1.2.0 (2018-09-13)
### Features
* **styles:** updating styles for '*ontimize-web-ngx@3.1.0*'

# 1.1.2 (2018-07-24)
### Features
* **styles:** updating styles for '*ontimize-web-ngx@3.0.0*'

# 1.1.1 (2018-07-02)
### Features
* **styles:** updating styles for '*ontimize-web-ngx@3.0.0-rc.1*'

# 1.1.0 (2018-04-30)
### Features
* **styles:** updating styles for '*ontimize-web-ngx@3.0.0-rc.0*'

# 1.0.6 (2018-02-22)
### Bug Fixing
* **styles**: fixing styling bugs.

# 1.0.5 (2018-02-21)
### BREAKING CHANGES
* **preconfigured themes**: '*o-deepurple-amber*', '*o-indigo-pink*', '*o-pink-bluegrey*' and '*o-purple-green*' no longer exists ([99dd854](https://github.com/OntimizeWeb/ontimize-web-ngx/commit/99dd854))
* **ontimize-lite**: exported file 'src/themes/ontimize-lite.scss' no longer exists ([99dd854](https://github.com/OntimizeWeb/ontimize-web-ngx/commit/99dd854))
* **ontimize-lite**: exported file 'src/themes/ontimize.scss' only exports OntimizeWeb '*$theme*' (and does not apply that theme anymore) ([99dd854](https://github.com/OntimizeWeb/ontimize-web-ngx/commit/99dd854))

### Features
* **preconfigured themes**: preconfigured themes files exports '*$theme*' and '*$dark-theme*' ([f5d992d](https://github.com/OntimizeWeb/ontimize-web-ngx/commit/f5d992d))
* **styles**: adding '*ontimize-theme.scss*' file so user wont need to import 'node_modules/ontimize-web-ngx-theming/src/styles/ontimize-theme-styles.scss' and will only have to import 'node_modules/ontimize-web-ngx-theming/ontimize-theme.scss' ([8f58606](https://github.com/OntimizeWeb/ontimize-web-ngx/commit/8f58606))
* **styles**: adding '*ontimize-theme-lite.scss*' file so user wont need to import 'node_modules/ontimize-web-ngx-theming/src/styles/ontimize-theme-styles-lite.scss' and will only have to import 'node_modules/ontimize-web-ngx-theming/ontimize-theme-lite.scss' ([8f58606](https://github.com/OntimizeWeb/ontimize-web-ngx/commit/8f58606))
* **ontimize-theme-styles-lite**: adding '*typography*' parameter for overriding default angular material typography ([737d27f](https://github.com/OntimizeWeb/ontimize-web-ngx/commit/737d27f))


# 1.0.4 (2018-01-18)
### Features
* **styles:** updating styles.

# 1.0.3 (2017-12-21)
### Features
* **styles:** updating styles.

# 1.0.2 (2017-11-15)
### Features
* **styles:** adding new lite styles for all components ([b9c8dc1](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/b9c8dc1)). Import '*node_modules/ontimize-web-ngx-theming/src/themes/ontimize.scss*' in your application stylesheet for using it.
* **styles:** updating styles for '*md-tab-group*' ([23daefe](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/23daefe))
* **styles:** updating styles for '*o-table*' ([23daefe](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/23daefe)) ([6be7516](https://github.com/OntimizeWeb/ontimize-web-ngx-theming/commit/6be7516))

# 1.0.1 (2017-11-12)
### Features
* **styles:** updating styles.

# 1.0.0 (2017-09-26)
### Features
* **build:** initial version.
