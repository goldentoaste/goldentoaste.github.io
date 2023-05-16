<script>
    import Button from "$lib/Button.svelte";
    import DropDown from "$lib/DropDown.svelte";
    import List from "$lib/List.svelte";
    import ListItem from "$lib/ListItem.svelte";
    import SpotLightBox from "$lib/SpotLightBox.svelte";
    import { onMount } from "svelte";

    import { pageState, PageState } from "$lib/stores/pageUpdates";
    onMount(() => {
        $pageState = PageState.NoTransition;
    });
</script>

<h1>Coming soon!</h1>

<p>(Just dumping some experimental ui elements here for now)</p>

<DropDown title={"Drop down test title"}>
    <List>
        {#each [...Array(5).keys()] as x}
            <ListItem index={x}>
                <Button style={"margin:0;"}>Blah blag</Button>
            </ListItem>
        {/each}
    </List>
</DropDown>

<div style="background-color:black; padding:5rem; ">
    <SpotLightBox />
</div>
