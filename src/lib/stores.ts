import { writable, type Writable } from 'svelte/store';

export const tempUnit: Writable<"F" | "C"> = writable("F");