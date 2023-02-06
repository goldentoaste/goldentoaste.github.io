<script lang="ts">
    type NavItem = {
        name: string;
        dest: string;
    };

    export let items: NavItem[] = [];
</script>

<nav>
    {#each items as item}
        <a class="navitem" href={item.dest}>{item.name}</a>
    {/each}
    <button
        on:click={() => {
            window.document.body.classList.toggle('lightmode');
        }}
    >
        toggle darkmode</button
    >
</nav>

<style>

    nav{
        display: flex;
        width: 100%;
        position: fixed;
        top: 0;
        left:0;
        background-color: var(--fg);
        
    }

    .navitem {
        display: block;

    }


</style>