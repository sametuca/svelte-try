<script>
    var name  = "world";
    var accept = true;
    function AcceptKey() {
        accept!=accept;
    }
</script>
<h2>Component[IfStatement] = Gelişmiş if sorguları</h2>
{#if accept}
<label>
    Name
    <input type="text" bind:value={name}>
</label>
{/if}
<button on:click="{AcceptKey}">
    {name}
</button>