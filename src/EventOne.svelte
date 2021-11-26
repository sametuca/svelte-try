<script>
let sam = 1;
// sam her değiştiğinde eventVal tetiklenecektir.
$:eventVal = sam * 2;
let noTrigger = sam * 2;
function IncrementSam() {
    sam+=1;
}
</script>
<h2>Component[EventOne] = Bir değeri tetikle</h2>
<button on:click="{IncrementSam}">Click Me</button>
<h5>Sam val :{sam} </h5>
<h5>Event val :{eventVal} </h5>
<h5>noTrigger val :{noTrigger} </h5>

