<script>
let data = [
    {name:"cat",years:"4",},
    {name:"dog",years:"7"},
]
</script>

<ul>
    {#each data as {name,years},i}
    <li>{i}{name} {i}{years}</li>
    {/each}
</ul>


