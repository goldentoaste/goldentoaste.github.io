<script lang="ts">
    import { fade } from "svelte/transition";
    import { PageState, finishOutro, pageState } from "$lib/stores/pageUpdates";
    import { afterUpdate, onMount } from "svelte";
    import YearIndicator from "./yearIndicator.svelte";
    import ExpItem from "./expItem.svelte";

    let mounted = false;

    let pageHeight = 0;
    let scrollY = 0;
    let maxScroll = 0;

    let body: HTMLBodyElement;

    // always calc the furthrest point user scroll, to set length of the vert line
    $: {
        maxScroll = Math.max(scrollY, maxScroll);
    }

    // if height of page changed at run time, reduce max scroll to relfect that
    $: {
        scrollY = Math.min(pageHeight, scrollY);
    }

    function bodyResized() {
        if (body) {
            pageHeight = body.clientHeight;
            alert(pageHeight);
        }
    }

    onMount(() => {
        $pageState = PageState.NeedTransition;

        setTimeout(() => {
            mounted = true;
        }, 100);
    });
</script>

<svelte:window on:resize={bodyResized} />

<h1>
    pageHeight : {pageHeight}
</h1>
<h1>Past Experiences and Achievement</h1>
<div class="timelineParent">
    <div class="hline" style={mounted ? "max-width:800px;" : ""}>
        <div class="decor" />
    </div>

    <div class="vline" style={mounted ? "height:100vh;" : ""} />
</div>

<div style="margin-left: 2.5rem;">
    <YearIndicator year={"2237"} />
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
    {#each [...Array(2).keys()] as i}
        <ExpItem
            info={{
                title: "Present day",
                duration: "present time",
                details: [
                    "place holder items 1",
                    "place holder items 2",
                    "place holder items 3",
                    "place holder items 4",
                ],
            }}
        />
    {/each}
</div>

<style>
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

    .vline {
        position: absolute;
        width: 2px;
        height: 0;
        background-color: var(--fg-alt);

        top: 0;
        left: calc(2.5rem - 1px);

        transition: height 0.2s ease-out;
    }
</style>
