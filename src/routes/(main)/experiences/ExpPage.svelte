
<script lang="ts" context="module">
    import type ExperienceItemInput from "./expItem.svelte";


    export interface ExperienceInput {
        year: number,
        items: ExperienceItemInput[]
    }

</script>

<script lang="ts">

    import { PageState, finishOutro, pageState } from "$lib/stores/pageUpdates";
    import {  onMount } from "svelte";
    import YearIndicator from "./yearIndicator.svelte";
    import ExpItem from "./expItem.svelte";
    import { browser } from "$app/environment";


    export let pageInput: ExperienceInput[];

    let mounted = false;

    let pageHeight = 0;
    let windowHeight = 0;
    let scrollY = 0;
    let maxScroll = 0;

    let line: HTMLDivElement;
    let startingHeight = 0;
    let bottomGap = 150; // in px
    let topGap = 80; //5rem on top


    let years : (HTMLDivElement | undefined)[] = [undefined, undefined];

    // always calc the furthrest point user scroll, to set length of the vert line
    $: {
        maxScroll = Math.round(Math.max(scrollY, maxScroll));

        if (years[0])
        console.log(years[0].getBoundingClientRect().top)
    }

    // if height of page changed at run time, reduce max scroll to relfect that
    $: {
        scrollY = Math.min(pageHeight, scrollY);
    }

    function bodyResized() {
        if (browser) {
            pageHeight = document.body.clientHeight;
        }
    }

    onMount(() => {
        $pageState = PageState.NeedTransition;
        startingHeight = line.getBoundingClientRect().top;
        setTimeout(() => {
            mounted = true;
            bodyResized();
        }, 100);
    });
</script>

<svelte:window
    bind:scrollY
    on:resize={bodyResized}
    bind:innerHeight={windowHeight}
/>

<!-- <h1
    style="border:1px solid var(--fg); top:100px; left:100px; position:fixed; background:var(--bg-alt); z-index:10000"
>
    scroll : {Math.round(scrollY)}, maxScroll: {maxScroll}
</h1> -->

<h1>Past Experiences and Achievement</h1>

<div class="timelineParent">
    <div class="hline" style={mounted ? "max-width:800px;" : ""}>
        <div class="decor" />
    </div>

    <div
        bind:this={line}
        class="vline"
        style={mounted
            ? `height:${
                  windowHeight - bottomGap - startingHeight + maxScroll
              }px;`
            : ""}
    >
        <div class="scrollDiamond">
            <div class="innerArrow" />

            <div class="littleArrow" />
        </div>
    </div>
</div>

<div style="margin-left: 2.5rem;">
    <div bind:this={years[0]} class="year" >
        <YearIndicator year={"2237"} />
    </div>
    <ExpItem
        info={{
            title: "The Technomancer",
            duration: "4 Years",
            details: [
                "Soul of the machine intelligence",
                "Reanimating the world engine",
                "Last organic existance of the home world",
            ],
        }}
    />

    <YearIndicator year={"2023"} />
    {#each [...Array(5).keys()] as i}
      
    {/each}
</div>

<style>
    .year {
        position: sticky;

        top: 5rem;

        z-index: 10;
    }

    .timelineParent {
        width: auto;

        position: relative;
    }

    .hline {
        position: relative;
        width: auto;
        height: fit-content;
        max-width: 0;

        overflow: hidden;
        border-top: 2px solid var(--fg-alt);

        transition: max-width 0.2s ease-out;
    }

    .decor {
        position: relative;
        background: var(--fg-alt);
        width: 1rem;
        height: 1rem;

        transform: translate(0, -50%) rotate(45deg);
        top: 0rem;
        left: 2rem;
    }

    /* vertical line, and decoration for it */

    .vline {
        position: absolute;
        width: 2px;
        height: 0;
        background-color: var(--fg-alt);

        top: 0;
        left: calc(2.5rem - 1px);

        transition: height 0.2s ease-out;
    }

    .scrollDiamond {
        position: absolute;
        bottom: -1.5rem;
        left: calc(-0.75rem + 1px);

        width: 1.5rem;
        height: 1.5rem;

        background-color: var(--fg-alt);
        transform: rotate(45deg) scale(0.8);
    }

    /* using border to draw triangle owo */
    .innerArrow {
        position: absolute;

        top: 0rem;
        left: 0rem;

        width: 0;
        height: 0;

        border-right: 0.75rem solid var(--bg-alt);
        border-bottom: 0.75rem solid var(--bg-alt);
        border-left: 0.75rem solid transparent;
        border-top: 0.75rem solid transparent;

        transform: scale(0.8);
    }

    .littleArrow {
        position: absolute;

        top: 0.86rem;
        left: 0.85rem;

        width: 0;
        height: 0;

        border-right: 0.2rem solid var(--fg);
        border-bottom: 0.2rem solid var(--fg);
        border-left: 0.2rem solid transparent;
        border-top: 0.2rem solid transparent;
    }
</style>
