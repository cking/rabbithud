<script>
    import { Alert } from 'flowbite-svelte';
    import { hotkeys } from "svelte-hotkeys";
    import Counter from "./components/Counter.svelte";

    function toggleDevTools(ev) {
        window.rabbit.devtools()
    }
</script>

<svelte:window use:hotkeys={{ keys: 'ctrl+shift+i', handler: toggleDevTools }} />
<svelte:head>
    <title>Rabbit HUD</title>
    <!-- todo: pico css :3 -->
    <!-- todo icon -->
    <!--link rel="icon" href="" type="image/png"-->
</svelte:head>

<main>
    <h1>Hello Electron!</h1>
	
    <Alert>
		<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
	</Alert>
    
    <Counter />

    <p>
        Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
        apps.
    </p>

    <p>
        Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a>
        for the officially supported framework, also powered by Vite!
    </p>
</main>
