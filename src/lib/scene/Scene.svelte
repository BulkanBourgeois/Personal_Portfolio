<script lang="ts">
	import { T } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { onDestroy, onMount } from 'svelte';
	import RoomModel from '$lib/scene/models/RoomModel.svelte';
	import { cameraMode } from '$lib/stores/cameraStore';
	import { openProject } from '$lib/stores/projectStore';

	onMount(() => {
		interactivity();
	});

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

<T.PerspectiveCamera makeDefault position={[-0.5, 1.7, 1.8]} fov={50} />
<T.AmbientLight intensity={1} />
<T.HemisphereLight args={['#ffffff', '#202020', 0.8]} />
<T.DirectionalLight position={[4, 6, 4]} intensity={1.2} />
<RoomModel onTvClick={handleTvClick} onTvHoverChange={handleTvHoverChange} />
