
<script lang="ts">
    type NavItem = {
        name: string;
        dest: string;
    }

    export let items: NavItem[] = [];

</script>


<nav>

    {#each items as item}
        <a href="{item.dest}">{item.name}</a>
    {/each}
</nav>