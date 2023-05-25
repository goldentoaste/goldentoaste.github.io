<script lang="ts">
    import ExpPage from "./ExpPage.svelte";
    import type { ExperienceInput } from "./ExpPage.svelte";

    let pageInput: ExperienceInput[] = [
        {
            year: "2023",
            items: [
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
            ],
        },
        {
            year: "22222",
            items: [
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
            ],
        },
        {
            year: "2078",
            items: [
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
            ],
        },
    ];
</script>

<ExpPage {pageInput} />
