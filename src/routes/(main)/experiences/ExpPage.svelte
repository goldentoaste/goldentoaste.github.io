<script lang="ts" context="module">
    import type { ExperienceItemInput } from "./expItem.svelte";

    export interface ExperienceInput {
        year: string;
        items: ExperienceItemInput[];
    }
</script>

<script lang="ts">
    import { PageState, pageState } from "$lib/stores/pageUpdates";
    import { onMount } from "svelte";
    import YearIndicator from "./yearIndicator.svelte";
    import ExpItem from "./expItem.svelte";
    import { browser } from "$app/environment";
    import elementVisible from "$lib/scripts/elementVisible";
    import InfoBox from "$lib/InfoBox.svelte";
    import { fade, fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import Divider from "$lib/Divider.svelte";
    import { spring } from "svelte/motion";

    export let pageInput: ExperienceInput[];

    let mounted = false;

    let pageHeight = 0;
    let windowHeight = 0;
    let windowWidth = 1000;
    let scrollY = 0;
    let maxScroll = 0;

    let line: HTMLElement;
    let startingHeight = 0;
    let bottomGap = 200; // in px
    let vlineHeight = spring(0, {
        precision: 3,
        stiffness: 0.05,
        damping: 0.7,
    });

    $: $vlineHeight = windowHeight - bottomGap - startingHeight + maxScroll;
    let selectedYear = 0;
    let selectedItem = 0;

    let isMobile = false;
    let showModal = false;
    $: {
        isMobile = windowWidth < 900;
    }

    let years: (HTMLDivElement | undefined)[] = Array(pageInput.length);
    years.fill(undefined);

    // if height of page changed at run time, reduce max scroll to relfect that
    $: {
        scrollY = Math.min(pageHeight, scrollY);
    }
    $: maxScroll = Math.round(Math.max(scrollY, maxScroll));

    function bodyResized() {
        if (browser) {
            pageHeight = document.body.clientHeight;
        }
    }

    onMount(() => {
        $pageState = PageState.NeedTransition;

        if (!line){
            line = document.getElementById("vline")!;
        }
        setTimeout(() => {
            mounted = true;
            bodyResized();
            if (line)
            startingHeight = line.getBoundingClientRect().top;
        }, 50);


        setTimeout(()=>{
            if (line)
            line.style.setProperty("transition", "none")
        }, 1000)
    });
</script>

<svelte:window
    bind:scrollY
    on:resize={bodyResized}
    bind:outerHeight={windowHeight}

    bind:innerWidth={windowWidth}
/>

<!-- <h1
    style="border:1px solid var(--fg); top:100px; left:100px; position:fixed; background:var(--bg-alt); z-index:10000"
>
    scroll : {Math.round(scrollY)}, maxScroll: {maxScroll}
</h1> -->

<div class="wrapper" style="--margin-left:2rem;">
    <div class="root">
        <div class="left">
            <h1>Past Experiences and Achievement</h1>
            <div class="timelineParent">
                <div class="hline" style={mounted ? "max-width:800px;" : ""}>
                    <div class="decor" />
                </div>

                <div
                id="vline"
                    bind:this={line}
                    class="vline"
                    style={mounted ? `height:${$vlineHeight}px;` : ""}
                >
                    <div class="scrollDiamond">
                        <div class="innerArrow" />

                        <div class="littleArrow" />
                    </div>
                </div>
            </div>

            <div style="margin-left: var(--margin-left); margin-bottom:10rem;">
                {#each pageInput as group, yearIndex}
                    <div class="group">
                        <div
                            use:elementVisible={[
                                (node) => {
                                    node.classList.add("visible");
                                },
                                windowHeight,
                                bottomGap ,
                            ]}
                            bind:this={years[yearIndex]}
                            class="year iniHidden"
                        >
                            <YearIndicator year={group.year} />
                        </div>

                        {#each group.items as item, itemIndex}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div
                                on:click={() => {
                                    selectedYear = yearIndex;
                                    selectedItem = itemIndex;
                                    showModal = true;
                                }}
                                class="iniHidden expItem"
                                use:elementVisible={[
                                    (node) => {
                                        node.classList.add("visible");
                                    },
                                    windowHeight,
                                    bottomGap ,
                                ]}
                            >
                                <ExpItem info={item} />
                            </div>
                        {/each}
                    </div>
                {/each}
            </div>
        </div>

        {#if isMobile && showModal}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                class="shadow"
                transition:fade|global={{ duration: 500, easing: cubicOut }}
                on:click={() => {
                    showModal = false;
                }}
            />
        {/if}
        {#if !isMobile || showModal}
            {#key [selectedItem, selectedYear]}
                <div
                    class="infobox"
                    in:fly|global={{ y: -30, duration: 500, easing: cubicOut }}
                    class:mobileInfo={isMobile}
                >
                    {#if !isMobile}
                        <Divider vertical={true} />
                    {/if}
                    <InfoBox
                        style="width:auto;"
                        title={pageInput[selectedYear].items[selectedItem]
                            .title}
                        titleEnd={pageInput[selectedYear].items[selectedItem]
                            .duration}
                    >
                        {@const item =
                            pageInput[selectedYear].items[selectedItem]}
                        <div class="boxtop">
                            <p>
                                {@html item.description}
                            </p>

                            <img
                                src={item.logoSrc}
                                alt="logo of {item.title}"
                            />
                        </div>

                        {#if item.moreDetails && item.moreDetails.length > 0}
                            <Divider usePadding={false} />
                            <ul>
                                {#each item.moreDetails as detail}
                                    <li>{@html detail}</li>
                                {/each}
                            </ul>
                        {/if}
                    </InfoBox>
                </div>
            {/key}
        {/if}
    </div>
</div>

<style>



    .expItem{
        margin:1rem;
    }
    
    .shadow {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;

        background-color: black;
        opacity: 0.4;

        z-index: 999;
    }

    div.mobileInfo {
        /* 4 hit combo to position at center of screen */
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;

        max-width: calc(100vw - 2rem);
    }

    .boxtop {
        display: flex;
        justify-content: space-between;

        align-items: center;
    }

    .boxtop > img {
        min-width: 100px;
        height: fit-content;
        max-height: 100px;
        border: 2px solid var(--fg-alt);
        object-fit: contain;
        margin: 0.5rem;
        padding: 0.25rem;
    }
    p {
        margin-left: 0.25rem;
    }

    ul {
        margin-left: 0.25;
    }

    .left {
        width: 800px;
    }

    .infobox {
        transform: translate(0, 5rem);

        width: 700px;
        height: min-content;
        position: sticky;
        top: 4.5rem;

        display: flex;
        
    }

    .wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .root {
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 1rem;
    }

    :global(.iniHidden) {
        filter: opacity(0);
        transition: filter 0.3s ease-out;
    }

    :global(.visible) {
        filter: opacity(1) !important;
    }

    .year {
        position: sticky;
        top: 4.5rem;
        z-index: 10;
        width: auto;
        max-width: 600px;
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

        transition: max-width 0.35s ease-out;
    }

    .decor {
        position: relative;
        background: var(--fg-alt);
        width: 1rem;
        height: 1rem;

        transform: translate(0, -50%) rotate(45deg);
        top: 0rem;
        left: calc(var(--margin-left) - 0.5rem);
    }

    /* vertical line, and decoration for it */

    .vline {
        position: absolute;
        width: 2px;
        height: 0;
        background-color: var(--fg-alt);

        top: 0;
        left: calc(var(--margin-left) - 1px);

        /* transition: height 0.5s ease-in-out; */
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


    @media screen and (max-width: 600px) {
        .expItem{
            margin: 0.5rem ;
            margin-left: 1rem;
        }

        .wrapper {
            --margin-left:0.75rem !important;
        }

    }
</style>
