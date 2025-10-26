<script lang="ts">
	import { onMount } from "svelte";

	let name = "world";

	let maxHeight = 100;
	let minHeight = 50;
	let offset = 100;
	let scroll: number = $state(0);
	let windowHeight = $state(100);

	onMount(() => {
		windowHeight = document.body.clientHeight;
	});
</script>

<svelte:window
	bind:scrollY={scroll}
	onresize={() => {
		windowHeight = document.body.clientHeight;
	}}
/>

<div id="wrapper" style="height:{windowHeight}px;">
	<img
		style="height: {Math.max(
			minHeight,
			Math.min(maxHeight, maxHeight - scroll + offset)
		)}px;"
		alt=""
		src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png"
	/>
</div>

<h1>Hello {name}!</h1>

{#each [...Array(50).keys()] as k}
	<p>make page longer</p>
{/each}

<style>
	#wrapper {
		position: absolute;
	}

	img {
		position: sticky;
		top: 1rem;
		margin-top: 10rem;
	}
</style>
