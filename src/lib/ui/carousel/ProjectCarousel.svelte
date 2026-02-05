<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { openProject, selectedProjectId } from '$lib/stores/projectStore';
</script>

<div class="flex gap-3 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
	{#each projects as project (project.id)}
		{@const isSelected = $selectedProjectId === project.id}
		<button
			type="button"
			class={`min-w-[16rem] rounded-lg border border-white/10 bg-zinc-950/60 p-3 text-left hover:bg-zinc-950/80 ${
				isSelected ? 'ring-2 ring-white/20' : ''
			}`}
			on:click={() => openProject(project.id)}
		>
			<div class="text-sm font-medium text-white">{project.title}</div>
			{#if project.subtitle}
				<div class="mt-0.5 text-xs text-white/60">{project.subtitle}</div>
			{/if}
			<div class="mt-2 text-xs text-white/70">{project.description}</div>
			<div class="mt-3 flex flex-wrap gap-1">
				{#each project.tech.slice(0, 4) as tag (tag)}
					<span class="rounded bg-white/5 px-2 py-0.5 text-[10px] text-white/70">{tag}</span>
				{/each}
			</div>
		</button>
	{/each}
</div>
