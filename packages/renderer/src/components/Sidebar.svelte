<script>
    import { FolderPlus, PlusCircle, Cog, Folder, FolderOpen, TableCells } from 'svelte-heros-v2'
</script>

<style>
    aside > button:hover {
        color: var(--color-6);
    }

    summary::marker {
        content: "";
    }
</style>

<aside>
    <button class="float-right" title="Add Overlay">
        <PlusCircle />
    </button>

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
</aside>