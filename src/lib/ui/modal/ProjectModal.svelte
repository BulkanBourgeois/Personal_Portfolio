<script lang="ts">
	import { closeProject, selectedProject } from '$lib/stores/projectStore';
</script>

{#if $selectedProject}
	<div class="fixed inset-0 z-50">
		<button
			type="button"
			class="absolute inset-0 cursor-default bg-black/60"
			aria-label="Close project details"
			on:click={closeProject}
		></button>

		<div class="absolute inset-0 flex items-center justify-center p-6">
			<div
				class="w-full max-w-xl rounded-xl border border-white/10 bg-zinc-950/90 p-5 text-white shadow-2xl backdrop-blur"
				role="dialog"
				aria-modal="true"
			>
				<div class="flex items-start justify-between gap-4">
					<div>
						<div class="text-lg font-semibold">{$selectedProject.title}</div>
						{#if $selectedProject.subtitle}
							<div class="mt-0.5 text-sm text-white/60">{$selectedProject.subtitle}</div>
						{/if}
					</div>
					<button
						type="button"
						class="rounded-md px-2 py-1 text-sm text-white/70 hover:bg-white/5 hover:text-white"
						on:click={closeProject}
					>
						Close
					</button>
				</div>

				<p class="mt-4 text-sm leading-relaxed text-white/80">{$selectedProject.description}</p>

				<div class="mt-4 flex flex-wrap gap-2">
					{#each $selectedProject.tech as tag (tag)}
						<span class="rounded bg-white/5 px-2 py-1 text-xs text-white/70">{tag}</span>
					{/each}
				</div>

				<div class="mt-5 flex flex-wrap gap-3">
					{#if $selectedProject.links?.github}
						<a
							class="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
							href={$selectedProject.links.github}
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					{/if}
					{#if $selectedProject.links?.demo}
						<a
							class="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
							href={$selectedProject.links.demo}
							target="_blank"
							rel="noreferrer"
						>
							Live Demo
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
