<script lang="ts">
    import Divider from "$lib/Divider.svelte";
    import IconListItem from "$lib/IconListItem.svelte";
    import ImageFrame from "$lib/ImageFrame.svelte";
    import TechUsed from "$lib/TechUsed.svelte";
    import { svgs } from "$lib/stores/svgs";

    import "svelte-highlight/styles/gruvbox-dark-medium.css";
</script>

<h1>WatchDogs</h1>
<p>
    With the advancement of Ai technology in the recent years, online scams and
    fraudulent are now are more intrusive than ever. Watchdogs is a tool that
    detects and reports scams, misinformantion, and potentially Ai generated
    content, by using GPT3. The hackathon project was well received in the event, and was 
    awarded second place overall and best deisgn.
</p>

<Divider />
<div class="points">
    <IconListItem path={svgs.star} key="star">
        Winner of Stormhacks 2023 - 2nd Place
    </IconListItem>
    <IconListItem path={svgs.star} key="star">
        Winner of Stormhacks 2023 - Best Ui/Ux design
    </IconListItem>


    <IconListItem path={svgs.github} key="github">
        <a target="_blank" href="https://github.com/DFriend01/Watchdog"
            >Github Repo</a
        ></IconListItem
    >
    <IconListItem path={svgs.link} key="link">
        <a target="_blank" href="https://devpost.com/software/watchdog-exrdgn"
            >Devpost Page</a
        >
    </IconListItem>

    <IconListItem path={svgs.sadFace} key="sadface">
        The deployed page current is up, but the Ai analysis feature is disabled
        for now due to GPT api cost.
    </IconListItem>
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
