<script>
	let name = $state('world');
	let count = $state(0);

	let s = $state(false)
	let src = $derived(s?"/test/A":"/test/B");
	let frame = $state()
	let height = $state(0)
</script>

<h1>Hello {name}!</h1>

<iframe {src} bind:this={frame} onload={()=>{
	setTimeout(()=>{
			height = frame.contentWindow?.document.body.scrollHeight
	}, 0)
}}>

</iframe>
<p>
	height: {height}px, src: {src}
</p>
<input bind:value={name} />
<button onclick={() =>  s = !s}>
	clicks: {count}
</button>
<button onclick={()=>{
	height = frame.contentWindow?.document.body.scrollHeight
}}>
	TEST
</button>