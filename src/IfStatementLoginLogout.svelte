<script>
let user = {login:false}
let x = 7;
function LoginOrLogout() {
    user.login=!user.login;
}
</script>
<h2>Component[IfStatement] = Gelişmiş if sorguları 2</h2>
{#if user.login}
	<button on:click={LoginOrLogout}>
		Log out
	</button>
{:else}
	<button on:click={LoginOrLogout}>
		Log in
	</button>
{/if}


{#if x > 10}
	<p>{x} is greater than 10</p>
{:else}
	{#if 5 > x}
		<p>{x} is less than 5</p>
	{:else}
		<p>{x} is between 5 and 10</p>
	{/if}
{/if}
