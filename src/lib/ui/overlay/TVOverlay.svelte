<script lang="ts">
	import ProjectCarousel from '$lib/ui/carousel/ProjectCarousel.svelte';
	import ProjectModal from '$lib/ui/modal/ProjectModal.svelte';
</script>

<div class="pointer-events-none absolute inset-0 z-10 flex items-end justify-center p-6">
	<div
		class="pointer-events-auto w-full max-w-2xl rounded-xl border border-white/10 bg-zinc-950/60 p-4 text-white backdrop-blur"
	>
		<div class="mb-3 flex items-center justify-between gap-4">
			<div class="text-sm font-medium text-white/90">Projects</div>
			<div class="text-xs text-white/60">Click a card to view details</div>
		</div>
		<ProjectCarousel />
	</div>
</div>

<ProjectModal />

