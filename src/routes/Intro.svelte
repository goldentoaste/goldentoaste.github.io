<script lang="ts">
    import { onMount } from 'svelte';
    import InfoBox from '$lib/InfoBox.svelte';
    import IconListItem from '$lib/IconListItem.svelte';
    let emailContnet = '';

    onMount(() => {
        setTimeout(() => {
            emailContnet = 'rayg2375@gmail.com';
        }, 1000);
    });
</script>

<div class="container">
    <div class="headContainer">
        <h1>Ray Gong's website (Under Construction)</h1>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        
        <InfoBox title="Profile info" style="margin-top:5rem;">
             <img alt="" src="/bigBread.svg" />
            <div class="imgHolder">
               
            </div>
            <div class="list">
                <IconListItem>asd</IconListItem>
            </div>
        </InfoBox>
    </div>
    <p>Resume <a href="/resume">here</a></p>
    <p>Github <a href="https://github.com/goldentoaste">https://github.com/goldentoaste</a></p>
    <p>Email: {emailContnet}</p>
</div>

<style>
    .list {
    }

    .headContainer {
        display: flex;
    }

    img {
        position: relative;
        z-index: 100;
        width: 25vw;
        margin: 0.5rem;

        filter: drop-shadow(-1px -1px 0px var(--fg-alt)) drop-shadow(2px -1px 0px var(--fg-alt))
            drop-shadow(2px 2px 0px var(--fg-alt)) drop-shadow(-1px 2px 0px var(--fg-alt));
    }

    h1 {
        margin-top: 5rem;
        font-size: 3vw;
    }
</style>
