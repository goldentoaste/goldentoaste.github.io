<script lang="ts">
    import NavBar from "./NavBar.svelte";
    import "../global.css";

    let breadPath = ` M  0.1875,0.9000 C  0.1658,0.9000 0.1479,0.8929 0.1337,0.8787 C  0.1196,0.8646 0.1125,0.8467 0.1125,0.8250 V  0.3663 C  0.0800,0.3479 0.0531,0.3244 0.0319,0.2956 C  0.0106,0.2669 0.0000,0.2300 0.0000,0.1850 C  0.0000,0.1325 0.0177,0.0885 0.0531,0.0531 C  0.0885,0.0177 0.1325,0.0000 0.1850,0.0000 H  0.8150,0.0000 C  0.8675,0.0000 0.9115,0.0177 0.9469,0.0531 C  0.9823,0.0885 1.0000,0.1325 1.0000,0.1850 C  1.0000,0.2300 0.9894,0.2669 0.9681,0.2956 C  0.9469,0.3244 0.9204,0.3479 0.8887,0.3663 V  0.8250 C  0.8887,0.8467 0.8817,0.8646 0.8675,0.8787 C  0.8533,0.8929 0.8354,0.9000 0.8137,0.9000 H  0.1875,0.9000 Z  M  0.1875,0.8250 H  0.8137,0.8250 V  0.3312 L  0.8575,0.3038 C  0.8767,0.2921 0.8927,0.2767 0.9056,0.2575 C  0.9185,0.2383 0.9250,0.2142 0.9250,0.1850 C  0.9250,0.1542 0.9144,0.1281 0.8931,0.1069 C  0.8719,0.0856 0.8458,0.0750 0.8150,0.0750 H  0.1850,0.0750 C  0.1542,0.0750 0.1281,0.0856 0.1069,0.1069 C  0.0856,0.1281 0.0750,0.1542 0.0750,0.1850 C  0.0750,0.2150 0.0813,0.2394 0.0938,0.2581 C  0.1062,0.2769 0.1229,0.2925 0.1437,0.3050 L  
0.1875,0.3312 V  0.8250 Z`
    let items  = [
        {
            name: "Home",
            dest: "./",
            iconPath: breadPath
            
        },
        {
            name: "Projects",
            dest: "./",  iconPath: breadPath
        },
        {
            name: "Others",
            dest: "./other",  iconPath: breadPath
        },
        {
            name: "Google",
            dest: "https://google.ca",  iconPath: breadPath
        },
    ];
</script>

<NavBar {items} />

<slot />

<div></div>
<style>

    div{
        content: '';
        position: fixed;
        z-index: 100;
        pointer-events: none;
        touch-action: none;

        top: 0;
        left: 0;
        bottom:0;
        right: 0;
        box-shadow: inset 0 0 200px rgba(0, 0, 0, 1);
        background-image: linear-gradient(to right, var(--bg-alt) 1px, rgba(204, 200, 177, 0) 1px), linear-gradient(to bottom, var(--bg-alt) 1px, rgba(204, 200, 177, 0) 1px);
        background-size: 0.4rem 0.4rem;
        filter: opacity(40%) blur(0.6px);
  
  }
</style>
