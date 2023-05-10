<script>
    import Button from "$lib/Button.svelte";
    import DropDown from "$lib/DropDown.svelte";
    import List from "$lib/List.svelte";
    import ListItem from "$lib/ListItem.svelte";
</script>

<h1>Coming soon!</h1>

<DropDown title={"Drop down test title"}>
    <List>
        {#each [...Array(5).keys()] as x}
            <ListItem index={x}>
                <Button style={"margin:0;"}>Blah blag</Button>
            </ListItem>
        {/each}
    </List>
</DropDown>
