


<script lang="ts">
    import IconListItem from "$lib/IconListItem.svelte";
    import { svgs } from "$lib/stores/svgs";


</script>




<h1>(Mis)Fortune Cookies!</h1>

<div class="points">
    <IconListItem path={svgs.link} key="star">
        Winner of SFU System Hacks 2023 - Judge's Choice
    </IconListItem>

    
</div>


<style>

    


    .points {
        display:flex;
        flex-flow: wrap;
        gap: 0.5rem;
        flex-direction: column;
    }
</style>