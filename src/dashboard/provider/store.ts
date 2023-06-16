//#region Import
import { writable } from 'svelte/store';
//#endregion

//#region Constant
const isSlideMenuOpen = writable(false);

const isDarkMode = writable(true);

export { isSlideMenuOpen, isDarkMode };
//#endregion
