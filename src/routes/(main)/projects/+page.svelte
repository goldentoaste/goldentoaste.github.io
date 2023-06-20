<script>
    import ProjectPage from "./projectPage.svelte";
    import { fade } from "svelte/transition";
    import { finishOutro } from "$lib/stores/pageUpdates";
</script>

<div transition:fade|global={{ duration: 150 }} on:outroend={finishOutro}>
    <ProjectPage
        contents={[
             {
                text: "🐶 WatchDog",
                title: "WatchDog - On the lookout for online scams/frauds",
                path: "",
                page: "watchdogs",
            },
            {
                text: "🔮 Toneteller",
                title: "Toneteller - Ai tool for emotion detection",
                path: "",
                page: "toneteller",
            },
            {
                text: "🥠 MisFortune Cookie",
                title: "MisFortune Cookie: Tasty daily fortune",
                path: "",
                page: "fortunecookie",
            },
            {
                text: "✂️ ScreenCap",
                title: "ScreenCap - A screen capturing/utilities tool for desktop",
                path: "",
                page: "screencap",
            },

            {
                text: "🍔 Nommers",
                title: "Nommers : Resturant finder web app",
                path: "",
                page: "nommers",
            },
        ]}
    />
</div>
