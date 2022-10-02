<script>
    import {
        PlusCircle,
        Cog,
        Folder,
        FolderOpen,
        TableCells,
    } from "svelte-heros-v2";
    import { openModal } from "svelte-modals";
    import NewGroupDialog from "./NewGroupDialog.svelte";
    import DropdownButton from "./DropdownButton.svelte";

    function onNewOverlay(ev) {
        console.log(ev);
    }

    function onNewGroup(ev) {
        openModal(NewGroupDialog, {
            title: "Alert",
            message: "This is an alert",
        });
    }
</script>

<DropdownButton>
    <PlusCircle />

    <ul slot="menu" class="menu">
        <li on:click={onNewOverlay}>New Overlay</li>
        <li on:click={onNewGroup}>New Group</li>
    </ul>
</DropdownButton>

<h2 class="top">Overlays</h2>
<ul class="options">
    <li>
        <details open>
            <summary>
                <FolderOpen size="18" class="inline-block" /> Item A
            </summary>

            <ul class="options">
                <li>
                    <TableCells size="18" class="inline-block" />
                    <a href="#">Item A.A</a>
                </li>
                <li>
                    <details>
                        <summary>
                            <Folder size="18" class="inline-block" /> Item A.B
                        </summary>
                    </details>
                </li>
                <li>
                    <TableCells size="18" class="inline-block" />
                    <a href="#">Item A.C</a>
                </li>
            </ul>
        </details>
    </li>
    <li>
        <details>
            <summary><Folder size="18" class="inline-block" /> Item B</summary>
        </details>
    </li>
    <li>
        <TableCells size="18" class="inline-block" /> <a href="#">Item C</a>
    </li>
</ul>
<h2>Settings</h2>
<ul class="options">
    <li><Cog size="18" class="inline-block" /> <a href="#">General</a></li>
    <li><Cog size="18" class="inline-block" /> <a href="#">Cactbot</a></li>
</ul>

<style>
    summary::marker {
        content: "";
    }

    details {
        margin-left: 3ch;
    }

    summary {
        margin-left: -3ch;
        cursor: pointer;
    }

    ul.options  {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    ul.menu {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        margin: 0;
        padding: 0;
        white-space: nowrap;

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

    details[open] summary {
        font-style: italic;
    }

    h2 {
        margin: 1ch 0 0;
    }

    h2.top {
        margin: 0;
    }
</style>
