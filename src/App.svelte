<script>
  import EachStatement from './EachStatement.svelte';

  import IfStatementLoginLogout from './IfStatementLoginLogout.svelte';

  import IfStatement from './IfStatement.svelte';

  import EkleVeTopla from './EkleVeTopla.svelte';

  import MultiAndOtherEvent from './MultiAndOtherEvent.svelte';

  import EventOne from './EventOne.svelte';

  import IncrementButton from './IncrementButton.svelte';

  import ExportFieldComponent from './ExportFieldComponent.svelte';

</script>
<main>
<IncrementButton></IncrementButton>
<ExportFieldComponent name="samet"></ExportFieldComponent>
<EventOne></EventOne>
<MultiAndOtherEvent></MultiAndOtherEvent>
<EkleVeTopla></EkleVeTopla>
<IfStatement></IfStatement>
<IfStatementLoginLogout></IfStatementLoginLogout>
<EachStatement></EachStatement>
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