<script>
  import EkleVeTopla from './EkleVeTopla.svelte';

  import MultiAndOtherEvent from './MultiAndOtherEvent.svelte';

  import EventOne from './EventOne.svelte';

  import IncrementButton from './IncrementButton.svelte';

  import ExportFieldComponent from './ExportFieldComponent.svelte';
	//#region what is main?
	// js kodları script içerisine yazılırken, diğer yapılar main bloğu içerisinde tutuluyor.
	// Asıl component main. Main html içerisinde body'e karşılık gelmektedir. Dolasıyla tüm çağrıları orada yapıyoruz.
	//#endregion
	let string = `this string contains some <strong>HTML!!!</strong>`;

</script>
<main>
<IncrementButton></IncrementButton>
<ExportFieldComponent name="samet"></ExportFieldComponent>
<EventOne></EventOne>
<MultiAndOtherEvent></MultiAndOtherEvent>
<EkleVeTopla></EkleVeTopla>
<h5>{@html string}</h5>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>