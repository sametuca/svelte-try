<script>
let value = 1;
function IncrementValue() {
    value+=1;    
}

</script>
<h2>Component[IncrementButton] = Tıklandığında artan sayılar</h2>
<button on:click="{IncrementValue}">
    {value}
</button>