<script>
	import Profile from './Profile.svelte';
	import Todos from './Todos.svelte';

	import { auth, googleProvider } from './firebase';
	import { authState } from 'rxfire/auth';

	let user;

	const unsubscribe = authState(auth).subscribe(u => user = u);

	function login() {
		auth.signInWithPopup(googleProvider);
	}


</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.min.css" />
</svelte:head>

<style>
	section{
		display:flex;
		flex-flow: column;
		align-items: center;
	}

	Profile {

	}
</style>

<section>
	{#if user}
		<Profile {...user} />
		<button on:click={ () => auth.signOut() }>Logout</button>
		<hr>
		<Todos uid={user.uid} />
	{:else}
		<button on:click={login}>
			Signin with Google
		</button>
	{/if}
</section>
