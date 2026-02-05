import { derived, writable } from 'svelte/store';
import { projects, type Project } from '$lib/data/projects';

export const selectedProjectId = writable<string | null>(null);

export const selectedProject = derived<typeof selectedProjectId, Project | null>(
	selectedProjectId,
	($selectedId) => projects.find((p) => p.id === $selectedId) ?? null
);

export function openProject(projectId: string) {
	selectedProjectId.set(projectId);
}

export function closeProject() {
	selectedProjectId.set(null);
}

