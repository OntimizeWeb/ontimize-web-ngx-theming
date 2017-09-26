
import { StyleManagerService } from './services/style-manager.service';
import { ThemeStorageService } from './services/theme-storage.service';

export { StyleManagerService } from './services/style-manager.service';
export { ThemeStorageService } from './services/theme-storage.service';

export const OTHEMING_PROVIDERS: any = [
  StyleManagerService,
  ThemeStorageService
];

