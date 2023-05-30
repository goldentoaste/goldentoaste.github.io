<script lang="ts">
    import Divider from "$lib/Divider.svelte";
    import IconListItem from "$lib/IconListItem.svelte";
    import ImageFrame from "$lib/ImageFrame.svelte";
    import TechUsed from "$lib/TechUsed.svelte";
    import { svgs } from "$lib/stores/svgs";

    import Highlight from "svelte-highlight";
    import typescript from "svelte-highlight/languages/typescript";
    import "svelte-highlight/styles/gruvbox-dark-medium.css";
</script>

<h1>(Mis)Fortune Cookies!</h1>
<p>
    MisFortune Cookie delivers your daily fortune via a virtual cookie! Crack
    open your cookie each morning so you can be prepared for the day.
</p>

<Divider />
<div class="points">
    <IconListItem path={svgs.star} key="star">
        Winner of SFU System Hacks 2023 - Judge's Choice
    </IconListItem>

    <IconListItem path={svgs.github} key="github">
        <a target="_blank" href="https://github.com/goldentoaste/fortune-cookie"
            >Github Repo</a
        ></IconListItem
    >
    <IconListItem path={svgs.link} key="link">
        <a target="_blank" href="https://goldentoaste.github.io/fortune-cookie/"
            >Try it out here!</a
        >
    </IconListItem>

    <IconListItem path={svgs.link} key="link">
        <a target="_blank" href="https://devpost.com/software/misfortune-cookie"
            >DevPost Page</a
        >
    </IconListItem>
</div>
<Divider />
<div class="top">
    <ImageFrame
        maxWidth={400}
        height={300}
        title="Cookie Demos"
        items={[
            {
                desc: "Grahpics of the fortune cookie",
                src: "cookie/cookie.jpg",
            },
            {
                desc: "The cookie getting cracked open, revealing the message",
                src: "cookie/cracked.jpg",
            },
            {
                desc: "An example message box",
                src: "cookie/messagebox.jpg",
            },
        ]}
    />

    <TechUsed
        input={[
            {
                name: "Front End",
                items: [
                    {
                        name: "Svelte",
                        src: "icons/svelte.svg",
                    },
                ],
            },
            {
                name: "Back End",
                items: [
                    {
                        name: "Svelte Kit",
                        src: "icons/svelte.svg",
                    },
                ],
            },
        ]}
    />
</div>

<p>
    This project was initially created during Sfu SystemHacks 2023 in under 12
    hours, and the currently deployed site is really a demo of the concept.
    Currently it would be nice to improve the general UI, improve animation, and
    most importantly improve the message generation system.
</p>

<p>
    The message generation currently works of a template system, for example a
    template can look like:
    <Highlight
        language={typescript}
        code="`I sure would __adj__ to __verb__ a __noun__ right now!`"
    />

    where the dunder wrapped place holders can be replaced with corresponding
    words at run time, and pray that they make sense. It would nice to make it
    to modify the system to make it more gramatically correct and the sentence
    outputs could make more sense.
</p>

<style>
    .top {
        display: flex;
        flex-flow: wrap;
        gap: 1rem;
        flex-direction: row;
    }

    .points {
        display: flex;
        flex-flow: wrap;
        gap: 0.5rem;
        flex-direction: column;
        margin-left: 1rem;
    }
</style>
