<script lang="ts">
    import { beforeNavigate, goto } from "$app/navigation";
    import { PageState, pageState, navDest } from "$lib/stores/pageUpdates";
    import { browser } from "$app/environment";
    import { page } from "$app/stores";

    beforeNavigate((nav: BeforeNavigate) => {
        if (
            nav.to === null ||
            nav.to?.route.id === $page.route.id ||
            $pageState === PageState.NoTransition
        ) {
            // if the current page does not request to wait for transition, then dont do anything
            $navDest = "";
            return;
        }

        if ($pageState === PageState.NeedTransition) {
            $pageState = PageState.Transitioning;
        }

        if ($pageState === PageState.Transitioning) {
            navDest.set(nav.to?.route.id || "/");
            nav.cancel();
        }
    });

    pageState.subscribe((state) => {
        if (browser && state === PageState.ReadyToNav && $navDest) {
            goto($navDest).then((val) => {
                pageState.set(PageState.NoTransition);
            });
        }
    });
</script>

<nav>
    <button>
        <a href="/"> Home </a>
    </button>
    <button>
        <a href="/TestPage"> TestPage </a>
    </button>
</nav>
{#if $pageState === PageState.NeedTransition || $pageState === PageState.NoTransition}
    <slot />
{/if}

<style>
    nav {
        display: flex;
    }
</style>
