
<div id="shadow" />


<style>

div#shadow {
        content: '';
        position: fixed;
        z-index: 1000;
        pointer-events: none;
        touch-action: none;

        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        box-shadow: inset 0 0 1000px rgba(0, 0, 0, 1);

        filter: opacity(60%) ;
    }
</style>