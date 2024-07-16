<script>
    import palNames from "$lib/data/filteredData.json"
    import PalSearch from "$lib/components/PalSearch.svelte"
    import Filters from "$lib/components/Filters.svelte"

    export let data = []
    let fitlersArray = []
    
    $: data = data?.results
</script>

<h1>Pal Page</h1>
<PalSearch />
<Filters bind:fitlersArray />

<div>
    {#if data}
        {#each data as pal}
            {#if pal.localizedName === "en_text"}   
                {#if pal.name in palNames}
                    <h1>{palNames[pal.name]}</h1>
                {/if}
            {:else}
                <h1>{pal.localizedName}</h1>
            {/if}
        {/each}
    {/if}

</div>