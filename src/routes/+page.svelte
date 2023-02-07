<script>
    import Intro from "./Intro.svelte";
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

    <p>Resume <a href="https://github.com/goldentoaste/portfolio/raw/main/FileStorage/RayGongResumeFeb2-2023.pdf">https://github.com/goldentoaste/portfolio/raw/main/FileStorage/RayGongResumeFeb2-2023.pdf</a></p>
    <p>Github <a href="https://github.com/goldentoaste">https://github.com/goldentoaste</a></p>
    <p>Email: {emailContnet}</p>
</div>

<Intro></Intro>
