<script>
	let name = 'world';

	let maxHeight = 100;
	let minHeight = 50;
	let scroll = 0;
</script>

<!--Find how to do the following in nextjs, -->
<svelte:window bind:scrollY={scroll} />

<img style="height: {Math.max(minHeight, maxHeight - scroll)}px;" alt=""  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png"/>

<h1>Hello {name}!</h1>


<p>make page longer</p>
<p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p><p>make page longer</p>


<style>

		img {
			height: 100px;
			position: sticky;
			top: 1rem;
		}
	
</style>