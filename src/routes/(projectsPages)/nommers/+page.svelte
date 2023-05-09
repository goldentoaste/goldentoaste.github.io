<script lang="ts">
    // @ts-nocheck
    import Divider from "$lib/Divider.svelte";
    import IconListItem from "$lib/IconListItem.svelte";
    import ImageFrame from "$lib/ImageFrame.svelte";
    import InfoBox from "$lib/InfoBox.svelte";
    import TechUsed from "$lib/TechUsed.svelte";
    import { svgs } from "$lib/stores/svgs";
    import VoteCard from "./VoteCard.svelte";

    function handler(event: PointerEvent) {
        console.log(event);
    }
</script>

<!-- <div
    use:pan
    on:pan={handler}
    style="width:500px;height:500px;border:1px solid black;"
/> -->

<h1>Nommers!</h1>

<p>
    Can't decide where to eat with your friends? Too many good options nearby
    but don't which one to go with? Simple solution: enforce democracy with
    Nommers! (and nom the process)
</p>

<div class="top">
    <ImageFrame
        width={500}
        height={300}
        title="Project show case"
        items={[
            {
                desc: "Promo image of Nommers",
                src: "nommer/1.jpg",
            },
            {
                desc: "Nom Nom Nom",
                src: "nommer/2.jpg",
            },
        ]}
    />

    <TechUsed
        input={[
            {
                name: "Front End",
                items: [{ name: "SvelteKit", src: "icons/svelte.svg" }],
            },
            {
                name: "Deployment",
                items: [
                    {
                        name: "AWS Elasticache",
                        path: svgs.aws,
                    },
                    {
                        name: "AWS RDS",
                        path: svgs.aws,
                    },
                    {
                        name: "AWS EBS",
                        path: svgs.aws,
                    },
                    {
                        name: "AWS EC2",
                        path: svgs.aws,
                    },
                    {
                        name: "AWS S3",
                        path: svgs.aws,
                    },
                ],
            },
            {
                name: "Server",
                items: [
                    { name: "Django", src: "icons/django.svg" },
                    { name: "Django Channels", src: "icons/django.svg" },
                    { name: "Redis", src: "icons/redis.svg" },
                    { name: "Websockets", path: svgs.websocket },
                ],
            },
        ]}
    />
</div>

<p>
    Nommers is an app that helps you and your friends discover local resturants,
    and also decide which one to go to as a group. The voting is system is
    inspired by the game series<a
        target="_blank"
        href="https://www.reignsgame.com/">"Reigns"</a
    >
</p>

<p>Here is a demo of the voting card:</p>

<div style="width:500px; height:500px;">
    <VoteCard>
        <div class="demo">

            More work is needed for this widget
        </div>
    </VoteCard>
</div>

<style>
    div.top {
        display: flex;
        flex-direction: horizontal;
        flex-flow: wrap;
    }

    .demo{color:black;}
</style>
