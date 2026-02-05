import { writable } from 'svelte/store';

export type CameraMode = 'idle' | 'focus-tv';

export const cameraMode = writable<CameraMode>('idle');

