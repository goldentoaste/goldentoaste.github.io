<script lang="ts">
    import Button from "$lib/Button.svelte";

    import { tick } from "svelte";
    import {
        SvelteMap,
        SvelteDate,
        SvelteSet,
        MediaQuery,
        createSubscriber,
    } from "svelte/reactivity";

    let s1 = $state.raw(new Array(100000));

    let s2 = new Array(100000);
    let v2 = $state(0);

    let s3 = $state.raw(new Array(100000));

    let timeTake = $state(0);

    class ReactiveArray<T> {
        array: Array<T> = [];
        #subscribe;
        #forceUpdate: (() => void) | undefined;

        constructor(arr: Array<T>) {
            this.array = arr;
            this.#subscribe = createSubscriber((update) => {
                this.#forceUpdate = update;
            });
        }

        get arr() {
            this.#subscribe();
            return this.array;
        }

        update() {
            if (!this.#forceUpdate) {
                alert("not initialized");
                return;
            }

            this.#forceUpdate();
        }
    }

    let s4 = new ReactiveArray(new Array<number>(100000));

</script>

<h1>This page experiments with svelte raw strategies</h1>

<p class="timer">Time taken: {timeTake}</p>

<h3>Raw state self assignment (doesn't work)</h3>
<Button
    on:click={async () => {
        const t0 = performance.now();
        s1.push(12345);
        s1 = s1;

        await tick();

        timeTake = performance.now() - t0;
    }}
>
    Mutate
</Button>
<ul>
    {#each s1 as item, idx (idx)}
        {#if idx > s1.length - 10}
            <li>
                {item}
            </li>
        {/if}
    {/each}
</ul>

<h3>Versioning State</h3>

<Button
    on:click={async () => {
        const t0 = performance.now();
        s2.push(12345);
        v2 += 1;

        await tick();

        timeTake = performance.now() - t0;
    }}
>
    Mutate
</Button>
{#key v2}
    <ul>
        {#each s2 as item, idx (idx)}
            {#if idx > s2.length - 10}
                <li>
                    {item}
                </li>
            {/if}
        {/each}
    </ul>
{/key}

<h3>Spread operator</h3>

<Button
    on:click={async () => {
        const t0 = performance.now();

        s3 = [...s3, 12345];

        await tick();

        timeTake = performance.now() - t0;
    }}
>
    Mutate
</Button>

<ul>
    {#each s3 as item, idx (idx)}
        {#if idx > s3.length - 10}
            <li>
                {item}
            </li>
        {/if}
    {/each}
</ul>

<h3>Subscriber pattern</h3>

<Button
    on:click={async () => {
        const t0 = performance.now();

        s4.array.push(123456);
        s4.update();

        await tick();

        timeTake = performance.now() - t0;
    }}
>
    Mutate
</Button>

<ul>
    {#each s4.arr as item, idx (idx)}
        {#if idx > s4.array.length - 10}
            <li>
                {item}
            </li>
        {/if}
    {/each}
</ul>

<style>
    .timer {
        position: sticky;
        top: 2rem;

        background-color: var(--bg);
    }
</style>
