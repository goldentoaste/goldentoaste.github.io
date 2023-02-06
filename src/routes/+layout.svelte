
<script>
    
    import NavBar from "./NavBar.svelte";
    import '../global.css';

    let items = [
        {
            name: "Home",
            dest:"./"
        },
        {
            name:"Projects",
            dest:"./"
        },
        {
            name:"Others",
            dest:"./"
        }
    ]
</script>


<NavBar {items}></NavBar>

<slot/>

<style>

</style>