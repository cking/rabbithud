<script>
    import { PlusCircle, Cog, Folder, FolderOpen, TableCells } from 'svelte-heros-v2'
    import { hotkeys } from "svelte-hotkeys";
    import Counter from "./components/Counter.svelte";

    import Sidebar from './components/Sidebar.svelte';

    function toggleDevTools(ev) {
        window.rabbit.devtools()
    }
</script>

<style>
    :global(body) {
        display: flex;
        gap: 2rem;
    }

    aside {
        flex: 1;
    }

    main {
        flex: 4;
    }
</style>

<svelte:window use:hotkeys={{ keys: 'ctrl+shift+i', handler: toggleDevTools }} />
<svelte:head>
    <title>Rabbit HUD</title>
    <link rel="shortcut icon" href="../assets/kurousagi.png" type="image/png">
</svelte:head>

<aside>
    <Sidebar />
</aside>

<main>
    <h1>Hello Electron!</h1>
    
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
