<script>
    import ProjectPage from "./projectPage.svelte";
    import { fade } from "svelte/transition";
    import { finishOutro } from "$lib/stores/pageUpdates";
</script>

<div transition:fade|global={{ duration: 150 }} on:outroend={finishOutro}>
    <ProjectPage
        contents={[
            {
                text:"⚙️ Gadget-lang",
                title:"Gadget-lang - Custom interpreted language",
                page:"gadget"
            }, 
            {
                text: "➡️ Swiper demo",
                title: "Swiper demo - a mobile Svelte component",
                page: "swiperDemo",
            },
            {
                text: "⚪ Webnuki",
                title: "Webnuki - P2p Web game on a Go board",
                page: "webnuki",
            },
            {
                text: "🐶 WatchDog",
                title: "WatchDog - On the lookout for online scams/frauds",
                path: "",
                page: "watchdogs",
            },
            {
                text: "⏱️ Turn Timer",
                title: "Turn Timer: for multiplayer table top games",
                path: "",
                page: "turntimer",
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
                text: "🍯 Sticky Markdown",
                title: "Sticky Markdown",
                path: "",
                page: "honeypot",
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
