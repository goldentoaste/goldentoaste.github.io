<script lang="ts" context="module">
    export interface ExperienceItemInput {
        title: string;
        duration: string;
        details: string[];
    }
</script>

<script lang="ts">
    import Divider from "$lib/Divider.svelte";
import SpotLightBox from "$lib/SpotLightBox.svelte";

    export let info: ExperienceItemInput;
</script>


    <SpotLightBox style="margin:1rem;">
        <div class="item" on:click on:keypress>
            <div class="top">
                <h3>{info.title}</h3>
                <span class='duration'>{info.duration}</span>
            </div>
            <Divider usePadding={false}/>
            <ul>
                {#each info.details as detail}
                    <li>{detail}</li>
                {/each}

            </ul>
        </div>
    </SpotLightBox>

<style>

    .duration {
        color:var(--fg-alt);
        margin-left: 2rem;
    }

    .item {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        padding: 0.5rem;
        cursor: pointer;
    }

    .top {
        display:flex;
        flex-direction: row;

        justify-content: space-between;
        align-items: center;
    }

    h3 {
        margin: 0.5rem;
        margin-left:0;
        font-weight: bold;
    }

    ul{
        margin: 0.5rem 0;
        padding-left: 1.25rem;
    }
</style>
