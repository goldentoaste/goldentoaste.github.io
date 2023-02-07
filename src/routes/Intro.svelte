
<script lang='ts'>

import { onMount } from "svelte";

let emailContnet = ""

onMount(()=>{
    setTimeout(()=>{
        emailContnet = "rayg2375@gmail.com"
    }, 1000)
})
</script>

<h1>Ray Gong's website (Under Construction)</h1>

<div class="container">

    <p>Resume <a href="/resume">here</a></p>
    <p>Github <a href="https://github.com/goldentoaste">https://github.com/goldentoaste</a></p>
    <p>Email: {emailContnet}</p>
</div>