<script lang="ts">
    import Divider from "$lib/Divider.svelte";
    import IconListItem from "$lib/IconListItem.svelte";
    import ImageFrame from "$lib/ImageFrame.svelte";
    import TechUsed from "$lib/TechUsed.svelte";
    import { svgs } from "$lib/stores/svgs";

    import "svelte-highlight/styles/gruvbox-dark-medium.css";
</script>

<h1>Turn timer</h1>
<p>
    This app was (inspired by?) made in response to slow playing in my Magic the Gathering EDH
    group. The timer app connects any number of players together and tracks remaining time for each player. 
    Information is shared and kept in sync for each client to simplify communication and speed up games.
</p>

<Divider />
<div class="points">


    <IconListItem path={svgs.github} key="github">
        <a target="_blank" href="https://github.com/goldentoaste/turn_timer"
            >Github Repo</a
        ></IconListItem
    >
  
    
    <IconListItem path={svgs.link} key="link">
        <a target="_blank" href="https://github.com/DFriend01/Watchdog"
            >Try it here!</a
        ></IconListItem
    >
</div>
<Divider />
<div class="top">
    <ImageFrame
        containerStyle="flex-basis:500px;"
        maxWidth={500}
        height={300}
        title="Watchdog demos"
        items={[
            {
                desc: "Promo image of watch dog",
                src: "watchdog/1.jpg",
            },
            {
                desc: "The chrome is extension in action",
                src: "watchdog/2.jpg",
            },
            {
                desc: "Output of GPT's analysis result being displayed by inject html to page.",
                src: "watchdog/3.jpg",
            },
        ]}
    />

    <TechUsed
        input={[
            {
                name: "Front End",
                items: [
                    {
                        name: "SvelteKit",
                        src: "icons/svelte.svg",
                    },
                    {
                        name: "Chrome Ext Api",
                        src: "icons/chrome.svg",
                    },
                ],
            },
            {
                name: "Deployment",
                items: [
                    {
                        name: "Github pages",
                        path: svgs.github,
                    },
                ],
            },
            {
                name: "Machine Learning",
                items: [
                    {
                        name: "GPT3.5",
                        path: svgs.openai,
                    },
            
                ],
            },
        ]}
    />
</div>

<style>
    .top {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
    }

    .points {
        display: flex;
        flex-flow: wrap;
        gap: 0.5rem;
        flex-direction: column;
        padding-left: 1rem;
    }
</style>
