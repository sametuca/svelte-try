<script>
let value = 1;
function IncrementValue() {
    value+=1;    
}

</script>

<button on:click="{IncrementValue}">
    {value}
</button>