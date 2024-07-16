<script>
    let searchTerm = ""
</script>
<div class="relative w-full">
    <input
      type="text"
      placeholder="Search..."
      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      bind:value={searchTerm}
    />
</div>

<h1>{searchTerm}</h1>