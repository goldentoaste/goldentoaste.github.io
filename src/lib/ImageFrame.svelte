<script lang="ts" context="module">
    export interface ImgItem {
        src: string;
        desc: string;
    }
</script>

<script lang="ts">
    import { fade } from 'svelte/transition';

    import Divider from './Divider.svelte';
    import InfoBox from './InfoBox.svelte';
    import { spring } from 'svelte/motion';

    export let title: string = ''; // a title to describe all this collectin of images
    export let items: ImgItem[] = [];
    export let containerStyle: string = '';

    export let width = 200;
    export let height = 200;

    const epsilon = 0.15;

    let scrollVal = spring(0, {
        stiffness: 0.15,
        damping: 0.6,
    });

    let index = 1;
    let mouseDown = false;
    let iniX = 0;

    let showArrows = false;

    function clamp(min: number, val: number, max: number) {
        return Math.min(Math.max(min, Math.abs(val)), max);
    }

    function down(e: MouseEvent | Touch) {
        console.log('down');
        mouseDown = true;
        iniX = e.clientX - $scrollVal;
    }

    function up(e: MouseEvent | Touch) {
        console.log('up');
        mouseDown = false;
        if (Math.abs($scrollVal) > 0.5 * width) {
            $scrollVal = Math.sign($scrollVal) * width;
        } else {
            $scrollVal = 0;
        }
    }

    function move(e: MouseEvent | Touch) {
        console.log('mov');
        if (mouseDown) {
            $scrollVal = e.clientX - iniX;
            console.log(e.clientX, iniX, clamp(0, width + $scrollVal, width));
        }
    }

    // check if scrolling finished
    $: {
        if (Math.abs(Math.abs($scrollVal) - width) < epsilon) {
            index = index - Math.sign($scrollVal);
            scrollVal.stiffness = 1;
            scrollVal.damping = 1;
            $scrollVal = 0;
            scrollVal.stiffness = 0.1;
            scrollVal.damping = 0.6;
        }
    }
</script>

{#if items.length === 0}
    <InfoBox {title}>
        <p>Image frame no content. (zero images provided)</p>
    </InfoBox>
{/if}

{#if items.length > 0}
    <InfoBox style={containerStyle + 'border:solid 2px var(--bg-alt2); width:min-content;'} {title}>
        <div
            class="imgHolder"
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
                            <path d="M3 1L5 3L3 5" stroke="var(--fg-alt)" stroke-width="0.5" />
                        </g>
                    </symbol>
                </defs>
            </svg>

            <div
                class="imagewrapper"
                style="
                    width:{width}px; height:{height}px;
                    "
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
                    e.stopPropagation();
                    move(e.touches[0]);
                }}
            >
                <!-- this goes behind original -->
                <!-- shrink original if so -->
                {#if index != items.length - 1 && $scrollVal < 0}
                    <div class="imageItem">
                        <img src={items[index + 1].src} alt="item" style="width: calc({width}px - 2rem);" />
                    </div>
                {/if}

                <div
                    class="imageItem"
                    style={$scrollVal < 0 && index != items.length - 1
                        ? `border-right: 2px solid var(--fg); width:${clamp(0, width + $scrollVal, width)}px;`
                        : ''}
                >
                    <img src={items[index].src} alt="item" style="width: calc({width}px - 2rem);" />
                </div>

                <!-- this goes over original -->
                {#if index != 0 && $scrollVal > 0}
                    <div
                        class="imageItem"
                        style="border-right: 2px solid var(--fg); width:{clamp(0, $scrollVal, width)}px;"
                    >
                        <img src={items[index - 1].src} alt="item" style="width: calc({width}px - 2rem);" />
                    </div>
                {/if}

                {#if showArrows}
                    {#if index !== 0}
                        <div class="arrow" id="left" transition:fade={{ duration: 200 }}>
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
                        <div class="arrow" id="right" transition:fade={{ duration: 200 }}>
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
        <Divider usePadding={false} style="margin-top: 0.7rem; margin-bottom:0.7rem;" />

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

        height: fit-content;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;

        user-select: none;
    }

    .imagewrapper {
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
    }

    img {
        height: auto;
        width: auto;
        background-color: var(--bg-alt);
        display: block;
        pointer-events: none;

        border: none;
        transition: border 0.2s;

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
        content: '';
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
