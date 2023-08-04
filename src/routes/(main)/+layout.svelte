<script lang="ts">
    import NavBar from "./NavBar.svelte";
    import Shadow from "$lib/Shadow.svelte";
    import Grid from "$lib/Grid.svelte";
    import { onMount } from "svelte";
    import {
        PageState,
        pageState,
        navDest,
        popStateDelta,
    } from "$lib/stores/pageUpdates";
    import { beforeNavigate, goto } from "$app/navigation";
    import "../../global.css";
    import type { BeforeNavigate } from "@sveltejs/kit";
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import Background from "$lib/Background.svelte";

    import { get } from "svelte/store";


    let breadPath = `M  0.1875,0.9000 C  0.1658,0.9000 0.1479,0.8929 0.1337,0.8787 C  0.1196,0.8646 0.1125,0.8467 0.1125,0.8250 V  0.3663 C  0.0800,0.3479 0.0531,0.3244 0.0319,0.2956 C  0.0106,0.2669 0.0000,0.2300 0.0000,0.1850 C  0.0000,0.1325 0.0177,0.0885 0.0531,0.0531 C  0.0885,0.0177 0.1325,0.0000 0.1850,0.0000 H  0.8150,0.0000 C  0.8675,0.0000 0.9115,0.0177 0.9469,0.0531 C  0.9823,0.0885 1.0000,0.1325 1.0000,0.1850 C  1.0000,0.2300 0.9894,0.2669 0.9681,0.2956 C  0.9469,0.3244 0.9204,0.3479 0.8887,0.3663 V  0.8250 C  0.8887,0.8467 0.8817,0.8646 0.8675,0.8787 C  0.8533,0.8929 0.8354,0.9000 0.8137,0.9000 H  0.1875,0.9000 Z  M  0.1875,0.8250 H  0.8137,0.8250 V  0.3312 L  0.8575,0.3038 C  0.8767,0.2921 0.8927,0.2767 0.9056,0.2575 C  0.9185,0.2383 0.9250,0.2142 0.9250,0.1850 C  0.9250,0.1542 0.9144,0.1281 0.8931,0.1069 C  0.8719,0.0856 0.8458,0.0750 0.8150,0.0750 H  0.1850,0.0750 C  0.1542,0.0750 0.1281,0.0856 0.1069,0.1069 C  0.0856,0.1281 0.0750,0.1542 0.0750,0.1850 C  0.0750,0.2150 0.0813,0.2394 0.0938,0.2581 C  0.1062,0.2769 0.1229,0.2925 0.1437,0.3050 L  
0.1875,0.3312 V  0.8250 Z`;
    
    let items = [
        {
            name: "Home",
            dest: "/",
            iconPath: breadPath,
        },
        {
            name: "Projects",
            dest: "/projects",
            iconPath: breadPath,
        },

        {
            name: "Resume",
            dest: "/resume",
            iconPath: breadPath,
        },
        {
            name: "Experiences",
            dest: "/experiences",
            iconPath: breadPath,
        },
        {
            name: "Others",
            dest: "/other",
            iconPath: breadPath,
        },
    ];

    let color = "#32302f";

    onMount(async () => {
        color = document.body.classList.contains("lightmode")
            ? "#a89984"
            : "#282828";
    });

    beforeNavigate((nav: BeforeNavigate) => {
        console.log(nav,$popStateDelta);

        if (nav.type === "popstate" && $popStateDelta !== 0) {
            // back/forward is not handled by goto, this prevents loops)

            $navDest = "";
            $popStateDelta = 0;
            console.log("canceling");
            
            return;
        }

        if (
            nav.to?.url.origin !== $page.url.origin || // in case linking to external site, no need to interfer
            $pageState === PageState.NoTransition || // no transition
            nav.to === null || // invalid navigation
            nav.to?.route.id === $page.route.id // in case nav dest is same as current page
        ) {
            // if the current page does not request to wait for transition, then dont do anything
            $navDest = "";
            $popStateDelta = 0;

            console.log("not interfeir",    nav.to?.url.origin !== $page.url.origin , // in case linking to external site, no need to interfer
            $pageState === PageState.NoTransition , // no transition
            nav.to === null , // invalid navigation
            nav.to?.route.id === $page.route.id);
             // in case nav dest is same as current page
            return;
        }

        if ($pageState === PageState.NeedTransition) {
            $pageState = PageState.Transitioning;
        }

        if ($pageState === PageState.Transitioning) {
            if (nav.type === "popstate" && nav.delta) {
                navDest.set("popstate");
                popStateDelta.set(nav.delta);
            } else {
                navDest.set(
                    nav.to?.route.id?.replace(/\/?\(\w+\)/g, "") || "/"
                );
            }
            nav.cancel();
            console.log("nav canceled");
            
        }
    });

    pageState.subscribe((state) => {
        if (browser && state === PageState.ReadyToNav && $navDest) {
            console.log(document.referrer);
            if ($navDest === "popstate") {

                console.log("simulating history.go");
                
                pageState.set(PageState.NoTransition);
                window.history.go(get(popStateDelta));
            } else {
                goto($navDest).then((val) => {
                    console.log("transition ends, goto");
                    
                    pageState.set(PageState.NoTransition);
                });
            }
        }
    });
</script>

<svelte:head>
    <meta name="theme-color" content={color} />
</svelte:head>

<Background />

<NavBar {items} />

<div class="rootLayoutParent">
    {#if $pageState === PageState.NeedTransition || $pageState === PageState.NoTransition}
        <slot />
    {/if}
</div>

<Grid />
<Shadow />

<style>
    div.rootLayoutParent {
        padding: 2rem;
        padding-top: 5rem;
        padding-bottom: 10rem;
        scrollbar-gutter: stable;
    }

    @media only screen and (min-width: 1200px) {
        div.rootLayoutParent {
            padding: 5rem;
        }
    }

    @media only screen and (max-width: 800px) {
        div.rootLayoutParent {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
        }
    }
</style>
