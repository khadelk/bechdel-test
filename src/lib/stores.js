import { writable } from 'svelte/store';
import json from '../bechdel-data.json';

export const bechdelData = writable(json)
