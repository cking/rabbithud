<script>
    import { FolderPlus, PlusCircle, Cog, Folder, FolderOpen, TableCells } from 'svelte-heros-v2'
    import DropdownButton from './DropdownButton.svelte';

    function onNewOverlay(ev) {
        console.log(ev)
    }

    function onNewGroup(ev) {
        console.log(ev)
    }
</script>

<style>
    summary::marker {
        content: "";
    }

    ul.menu {
        display: flex;
        flex-direction: column;

        background-color: var(--color-4);
        border-radius: 5px;
        border: 1px solid var(--color-5);
        color: var(--color-6);
        font-size: 0.8em;
    }

    .menu li {
        border-bottom: 1px solid var(--color-5);
        padding: 0.1ch 0.5ch;
        cursor: pointer;
    }

    .menu li:last-child {
        border-bottom: none;
    }

    .menu li:hover {
        background-color: #0004;
    }
</style>

<DropdownButton>
    <PlusCircle />
    
    <ul slot="menu" class="menu">
        <li on:click="{onNewOverlay}">New Overlay</li>
        <li on:click="{onNewGroup}">New Group</li>
    </ul>
</DropdownButton>

<h2 class="text-sm font-bold">
    Overlays
</h2>
<ul class="text-sm">
    <li>
        <details open>
            <summary class="italic"><FolderOpen size="18" class="inline-block" /> Item A</summary>
            
            <ul class="ml-4">
                <li><TableCells size="18" class="inline-block" /> <a href="#">Item A.A</a></li>
                <li>
                    <details>
                        <summary><Folder size="18" class="inline-block" /> Item A.B</summary>
                    </details>
                </li>
                <li><TableCells size="18" class="inline-block" /> <a href="#">Item A.C</a></li>
            </ul>
        </details>
    </li>
    <li>
        <details>
            <summary><Folder size="18" class="inline-block" /> Item B</summary>
        </details>
    </li>
    <li><TableCells size="18" class="inline-block" /> <a href="#">Item C</a></li>
</ul>
<h2 class="text-sm font-bold mt-4">
    Settings
</h2>
<ul class="text-sm">
    <li><Cog size="18" class="inline-block" /> <a href="#">General</a></li>
    <li><Cog size="18" class="inline-block" /> <a href="#">Cactbot</a></li>
</ul>