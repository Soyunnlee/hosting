//#region Import
import { writable } from 'svelte/store';
//#endregion

//#region Constant
const isSlideMenuOpen = writable(false);

const isDarkMode = writable(false);

export { isSlideMenuOpen, isDarkMode };
//#endregion
