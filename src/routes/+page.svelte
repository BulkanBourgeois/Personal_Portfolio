<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/scene/Scene.svelte';
	import TVOverlay from '$lib/ui/overlay/TVOverlay.svelte';
</script>

<div class="relative h-screen w-screen overflow-hidden bg-black">
	<div class="absolute inset-0">
		<Canvas>
			<Scene />
		</Canvas>
	</div>

	<TVOverlay />
</div>
