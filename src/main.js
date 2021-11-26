import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		url : 'www.google.com'
	}
});

export default app;