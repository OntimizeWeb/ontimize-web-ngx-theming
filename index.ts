import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { OTHEMING_MODULES } from './src/components';
// import { OTHEMING_PROVIDERS } from './src/services';

/**
 * Exports
 */
export * from './src/components';
export * from './src/services';

@NgModule({
  imports: [
    CommonModule
    // ,
    // ...OTHEMING_MODULES
  ],
  // exports: OTHEMING_MODULES,
  // providers: OTHEMING_PROVIDERS
})
export class OThemingModule { }
