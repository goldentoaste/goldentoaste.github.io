<script lang="ts" context="module">
    export interface ImgItem {
        src: string;
        desc: string;
    }
</script>

<script lang="ts">
    import { fade } from "svelte/transition";

    import Divider from "./Divider.svelte";
    import InfoBox from "./InfoBox.svelte";
    import { spring } from "svelte/motion";

    export let title: string = ""; // a title to describe all this collectin of images
    export let items: ImgItem[] = [];
    export let containerStyle: string = "";

    export let width = 200;
    export let height = 200;
    export let maxWidth = 200;
    let clientWidth: number;

    $: {
        width = Math.min(clientWidth, maxWidth);
    }

    const epsilon = 1;

    let scrollVal = spring(0, {
        stiffness: 0.2,
        damping: 1,
    });

    let abs = 0;
    $: abs = Math.abs($scrollVal);

    let box: HTMLElement;
    let index = 0;
    let mouseDown = false;
    let iniX = 0;
    let lastPos = 0;
    let iniTime = 0;

    let showArrows = false;

    function clamp(min: number, val: number, max: number) {
        return Math.min(Math.max(min, val), max);
    }

    function down(e: MouseEvent | Touch) {
        mouseDown = true;
        iniX = e.clientX - $scrollVal;
        iniTime = Date.now();
    }

    function up(e: MouseEvent | Touch) {
        mouseDown = false;
        // condition to check if going to next image to occur

        // user swipe far enough within the image
        let farSwipe = abs > 0.45 * width || abs > 500;

        // user swiped so that cursor leaves image
        const offset = lastPos - box.getBoundingClientRect().left;
        let exitSwipe = offset > width || offset < 0;

        // user swiped fast enough
        let fastSwipe =
            Math.abs((lastPos - iniX) / (Date.now() - iniTime + 0.1)) > 0.5; // 500 pixels per second speed required

        if (farSwipe || exitSwipe || fastSwipe) {
            scrollVal.set(Math.sign($scrollVal) * width);
        } else {
            $scrollVal = 0;
        }
    }

    function move(e: MouseEvent | Touch) {
        if (mouseDown) {
            $scrollVal = clamp(
                index === items.length - 1 ? 0 : -width,
                e.clientX - iniX,
                index === 0 ? 0 : width
            );

            lastPos = e.clientX;
        }
    }

    // check if scrolling finished
    $: {
        if (!mouseDown && Math.abs(Math.abs($scrollVal) - width) < epsilon) {
            index = clamp(0, index - Math.sign($scrollVal), items.length - 1);
            scrollVal.stiffness = 1;
            $scrollVal = 0;
            scrollVal.stiffness = 0.2;
            scrollVal.damping = 1;
        }
    }

    function xp(...obj: Object[]) {
        console.log(...obj);
    }
</script>

{#if items.length === 0}
    <InfoBox {title} outline={true}>
        <p>Image frame no content. (zero images provided)</p>
    </InfoBox>
{/if}

{#if items.length > 0}
    <InfoBox
        outline={true}
        style={containerStyle +
            "border:solid 2px var(--bg-alt2); width:min-content;"}
        {title}
    >
        <div
            bind:clientWidth
            class="imgHolder"
            style="width:{maxWidth}px; height:{height}px;"
            on:mouseenter={() => {
                showArrows = true;
            }}
            on:mouseleave={() => {
                showArrows = false;
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" display="none">
                <defs>
                    <symbol fill="none" viewBox="0 0 6 6" id="arrow">
                        <clipPath id="clip0_413_3">
                            <rect width="6" height="6" fill="white" />
                        </clipPath>
                        <g clip-path="url(#clip0_413_3)">
                            <rect
                                x="1"
                                y="3"
                                width="1.5"
                                height="1.5"
                                transform="rotate(-45 1 3)"
                                stroke="var(--fg-alt)"
                                stroke-width="0.5"
                            />
                            <path
                                d="M3 1L5 3L3 5"
                                stroke="var(--fg-alt)"
                                stroke-width="0.5"
                            />
                        </g>
                    </symbol>
                </defs>
            </svg>

            <!-- width:{width}px; height:{height}px; -->
            <div
                class="imagewrapper"
                bind:this={box}
                on:mousedown={down}
                on:mouseup={up}
                on:mouseleave={up}
                on:mousemove={move}
                on:touchstart={(e) => {
                    down(e.touches[0]);
                }}
                on:touchend={(e) => {
                    up(e.touches[0]);
                }}
                on:touchcancel={(e) => {
                    up(e.touches[0]);
                }}
                on:touchmove={(e) => {
                    move(e.touches[0]);
                }}
            >
                <!-- this goes behind original -->
                <!-- shrink original if so -->
                {#if index !== items.length - 1 && $scrollVal < 0}
                    <div class="imageItem">
                        <img
                            on:load={() => {
                        
                            }}
                            src={items[index + 1].src}
                            alt="item"
                            style="min-width: calc({width}px - 2rem);max-height: calc({height}px - 2rem);"
                        />
                    </div>
                {/if}

                <div
                    class="imageItem"
                    style={$scrollVal < 0 && index != items.length - 1
                        ? `border-right: 2px solid var(--fg); width:${clamp(
                              0,
                              width - abs,
                              width
                          )}px; box-shadow:  0 0 2rem var(--bg-alt3);`
                        : ""}
                >
                    <img
                        on:load={() => {
                        
                        }}
                        src={items[index].src}
                        alt="item"
                        style="min-width: calc({width}px - 2rem); max-height: calc({height}px - 2rem);"
                    />
                </div>

                <!-- this goes over original -->
                {#if index != 0 && $scrollVal > 0}
                    <div
                        class="imageItem"
                        style="border-right: 2px solid var(--fg); width:{clamp(
                            0,
                            abs,
                            width
                        )}px; box-shadow: 1rem 0 2rem var(--bg-alt3);"
                    >
                        <img
                            on:load={() => {
                            
                            }}
                            src={items[index - 1].src}
                            alt="item"
                            style="min-width: calc({width}px - 2rem);max-height: calc({height}px - 2rem);"
                        />
                    </div>
                {/if}

                {#if showArrows}
                    {#if index !== 0}
                        <div class="arrow" id="left">
                            <!-- svelte-ignore missing-declaration -->
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <svg
                                viewBox="0 0 6 6"
                                on:click={() => {
                                    $scrollVal = width;
                                }}
                            >
                                <use href="#arrow" />
                            </svg>
                        </div>
                    {/if}

                    {#if index !== items.length - 1}
                        <div class="arrow" id="right">
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <svg
                                viewBox="0 0 6 6"
                                on:click={() => {
                                    $scrollVal = -width;
                                }}
                            >
                                <use href="#arrow" />
                            </svg>
                        </div>
                    {/if}
                {/if}
            </div>

            <!-- decorations -->
            {#if items.length > 1}
                <div id="counter">
                    {index + 1}/{items.length}
                </div>
            {/if}

            <div id="starWrap">
                <div id="star" />
            </div>
        </div>
        <Divider
            usePadding={false}
            style="margin-top: 0.7rem; margin-bottom:0.7rem;"
        />

        <p>
            {items[index].desc}
        </p>
    </InfoBox>
{/if}

<style>
    p {
        width: 100%;
    }

    .imgHolder {
        position: relative;

        max-width: 100%;
        max-height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;

        user-select: none;
   
    }

    .imagewrapper {
        width: 100%;
        height: 100%;
        position: relative;
        border: var(--fg-alt) 2px solid;
        overflow: hidden;
        touch-action: none;

      
    }

    .imageItem {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        user-select: none;
        overflow: hidden;
      

        display: flex;
        /* justify-content: center; */
        align-items: center;

        transition: border-color box-shadow 0.5s ease-in-out;

        background: var(--bg);
        background-size: 100% 100%; 
    }

    img {
      
        display: block;

        object-fit: contain;
        /* display: block; */
        pointer-events: none;

        user-select: none;
        padding: 1rem;
        
     
    }

    #counter {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0 0.5rem;
        background-color: var(--bg-alt);
        color: var(--fg);

        border: 2px solid var(--fg-alt);
        z-index: 50;
    }

    #starWrap {
        position: absolute;
        top: 0;
        left: 0;

        transform: translate(calc(-50% + 0.15rem), calc(-50% + 0.15rem));

        display: flex;

        padding: 0.76rem;
        background-color: var(--bg-alt);
    }

    #star {
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        background-color: var(--fg-alt);

        display: inline-block;
    }

    .arrow {
        position: absolute;
        width: fit-content;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all 0.2s ease-out;
    }

    .arrow:active {
        scale: 1;
        filter: brightness(0.8);
    }

    .arrow::before {
        z-index: 1;
        position: absolute;
        content: "";
        background: linear-gradient(to right, transparent, var(--bg));
        width: 300%;
        height: 100%;

        opacity: 0.6;
        transition: opacity 0.2s ease-out;
        pointer-events: none;
    }

    .arrow:hover::before {
        opacity: 1;
    }

    .arrow#left::before {
        left: -200%;
    }
    .arrow#right::before {
        left: -200%;
    }
    .arrow#left {
        transform: scale(-1, 1);
        left: 0;
    }
    .arrow#right {
        right: 0;
    }

    .arrow:hover {
        scale: 1.2;
        filter: brightness(1.1);
    }

    .arrow > svg {
        width: 2rem;
        height: auto;
        position: relative;
        z-index: 2;
    }
</style>
