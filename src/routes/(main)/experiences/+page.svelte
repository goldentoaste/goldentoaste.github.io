<script lang="ts">
    import ExpPage from "./ExpPage.svelte";
    import type { ExperienceInput } from "./ExpPage.svelte";

    let pageInput: ExperienceInput[] = [
        {
            year:2023,
            items: [
                
            ]
        }
    ];
</script>

<ExpPage {pageInput} />
