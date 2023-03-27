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
        
        width:100dvw;
        height: 100dvh;
        box-shadow: inset 0 0 1000px rgba(0, 0, 0, 1);

        filter: opacity(60%);
    }
</style>
