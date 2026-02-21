<script lang="ts">
	import { T } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { onDestroy } from 'svelte';
	import RoomModel from '$lib/scene/models/RoomModel.svelte';
	import { cameraMode } from '$lib/stores/cameraStore';
	import { openProject } from '$lib/stores/projectStore';

	interactivity();

	const handleTvClick = () => {
		cameraMode.set('focus-tv');
		openProject('portfolio-mvp');
	};

	const handleTvHoverChange = (isHovering: boolean) => {
		if (typeof document === 'undefined') return;
		document.body.style.cursor = isHovering ? 'pointer' : 'default';
	};

	onDestroy(() => {
		if (typeof document === 'undefined') return;
		document.body.style.cursor = 'default';
	});
</script>

<T.PerspectiveCamera makeDefault position={[0, 1.8, 6]} fov={45} />
<T.AmbientLight intensity={0.8} />
<T.DirectionalLight position={[4, 6, 4]} intensity={1.1} />
<RoomModel onTvClick={handleTvClick} onTvHoverChange={handleTvHoverChange} />
