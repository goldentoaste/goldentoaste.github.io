<script>
    import ProjectPage from "./projectPage.svelte";
    import { fade } from "svelte/transition";
    import { finishOutro } from "$lib/stores/pageUpdates";
</script>

<div transition:fade={{ duration: 150 }} on:outroend={finishOutro}>
    <ProjectPage
        contents={[
            {
                text: "🍔 Nommers",
                title: "Nommers : Svelte web app",
                path: "",
                page: "nommers",
            },
            {
                text: "✂️ ScreenCap",
                title: "ScreenCap - A screen capturing/utilities tool for desktop",
                path: "",
                page: "screencap",
            },
            {
                text:"🥠 MisFortune Cookie", 
                title: "MisFortune Cookie: Tasty daily fortune",
                path:"",
                page: "fortunecookie"
            }
        ]}
    />
</div>
