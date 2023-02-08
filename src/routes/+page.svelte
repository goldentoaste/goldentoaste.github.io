<script>
    import Intro from "./Intro.svelte";
   import Section from "$lib/Section.svelte";
   import InfoBox from "$lib/InfoBox.svelte";
</script>

<div id="outer">
    <div id="inner">

        <Intro></Intro>
    
        <Section title="Title here!">
        
            <InfoBox title="Group title" style='min-width:10rem;'>
                <p>Place holder item</p>
                <p>item</p>
                <p>item</p>
                <p>item</p>
            </InfoBox>
        
            <InfoBox title="Group title" style='min-width:10rem;'>
                <p>Place holder item</p>
                <p>item</p>
                <p>item</p>
                <p>item</p>
            </InfoBox>
        
            <InfoBox title="Group title" style='min-width:10rem;'>
                <p>Place holder item</p>
                <p>item</p>
                <p>item</p>
                <p>item</p>
            </InfoBox>
        
            <InfoBox title="Group title" style='min-width:10rem;'>
                <p>Place holder item</p>
                <p>item</p>
                <p>item</p>
                <p>item</p>
            </InfoBox>
        
        
        </Section>
    </div>
</div>



<style>

    div#outer{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div#inner {
        width: fit-content;
    }
</style>