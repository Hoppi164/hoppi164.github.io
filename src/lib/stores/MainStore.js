import { writable } from 'svelte/store';

export const isDarkMode = writable(true);

export function toggleDarkMode() {
	isDarkMode.update((isDarkMode) => !isDarkMode);
}
