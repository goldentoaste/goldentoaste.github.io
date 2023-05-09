
<script lang="ts" context="module">

    export interface TechItem{
        name :string,
        src: string
    }

    export interface TechGroup{
        name: string,
        items: TechItem[]
    }


    let input : TechGroup[] = [];

</script>


<script >
    import InfoBox from "./InfoBox.svelte";
    import IconListItem from "./IconListItem.svelte";

</script>

<InfoBox title="tech used">
    {#each input  as group }
        

    <div class="techGroup">
        <h3>
            {group.name}
        </h3>

    </div>
    {/each}
</InfoBox>





<style>

    h3{
        underli
    }
</style>