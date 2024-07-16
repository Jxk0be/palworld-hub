<script>
    export let data = null
    console.log(data)

</script>

{#if Object.keys(data).length !== 0}
    <h1 class="text-3xl font-bold">{data?.identity?.localizedName === "en_text" ? data?.identity?.name : data?.identity?.localizedName}</h1>
{:else}
    <h1>Invalid Pal</h1>
{/if}

