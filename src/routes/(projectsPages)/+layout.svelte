<script>
    import "./projects.css";
    import { onMount } from "svelte";
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();

    onMount(()=>{
        window.parent.postMessage(
            {pageHeight:document.body.scrollHeight}, "/"
        );
    })

</script>

<div
style="padding: 0.75rem;"
>
    {@render children?.()}
</div>
