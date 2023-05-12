<script>
    import ProjectPage from "./projectPage.svelte";
    import { fade } from "svelte/transition";
    import { finishOutro } from "$lib/stores/pageUpdates";
</script>

<div transition:fade={{ duration: 1000 }} on:outroend={finishOutro}>
    <ProjectPage
        contents={[
            {
                text: "🍔 Nommers",
                title: "Nommers : Svelte web app",
                path: "",
                page: "nommers",
            },
            {
                text: "Test page 1",
                title: "ASDASD",
                path: "",
                page: "debug2",
            },

            {
                text: "ScreencCap",
                title: "ScreenCap - A screen capturing/utilities tool for desktop",
                path: "",
                page: "screencap",
            },
        ]}
    />
</div>
