<script lang="ts">
    import ExpPage from "./ExpPage.svelte";
    import type { ExperienceInput } from "./ExpPage.svelte";

    let pageInput: ExperienceInput[] = [
        {
            year: "2023",
            items: [
                {
                    title: "Present Da5y",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA1*"
                    ],
                },
                {
                    title: "Presen1t Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA2*"
                    ],
                },
                {
                    title: "Present Da2y",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA3*"
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
