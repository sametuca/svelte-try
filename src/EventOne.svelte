<script>
let sam = 1;
// sam her değiştiğinde eventVal tetiklenecektir.
$:eventVal = sam * 2;
let noTrigger = sam * 2;
function IncrementSam() {
    sam+=1;
}
</script>

<button on:click="{IncrementSam}"></button>
Sam val :{sam} 
Event val : {eventVal} 
noTrigger val : {noTrigger}